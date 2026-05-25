'use client'

import { useEffect, useRef } from 'react'

// ---------------------------------------------------------------------------
// GLSL — vertex
// ---------------------------------------------------------------------------
const VERT = /* glsl */ `
  attribute vec2 position;
  attribute vec2 uv;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`

// ---------------------------------------------------------------------------
// GLSL — fragment
// Approximates ShaderGradient "waterPlane" with:
//   - Ashima simplex noise (high quality, GPU-friendly)
//   - Domain-warped FBM for organic gradient edge
//   - Diagonal orientation  (rotationZ: -60)
//   - Perspective compression (rotationX: 50)
//   - Colors: #0a0a0a → #1a0a00 → #ff6b1a
// ---------------------------------------------------------------------------
const FRAG = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;

  // ---- Ashima simplex 2D noise ----
  vec3 mod289v3(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289v2(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289v3(((x * 34.0) + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865, 0.366025404, -0.577350269, 0.024390244);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1  = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289v2(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m * m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 a0 = x - floor(x + 0.5);
    m *= 1.79284291 - 0.85373472 * (a0 * a0 + h * h);
    vec3 g;
    g.x  = a0.x  * x0.x   + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  // ---- Fractal Brownian Motion ----
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    // Rotation matrix for successive octaves (reduces axis-aligned artifacts)
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    for (int i = 0; i < 5; i++) {
      v += a * snoise(p);
      p  = rot * p * 2.1;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    float t = uTime * 0.2; // uSpeed: 0.2

    // ---- Simulate tilted waterPlane view ----
    // rotationZ: -60 → diagonal orientation
    vec2 p = uv - vec2(0.5, 0.5);
    float ca = cos(-1.0472); // cos(-60°)
    float sa = sin(-1.0472); // sin(-60°)
    p = vec2(p.x * ca - p.y * sa, p.x * sa + p.y * ca);

    // rotationX: 50 → perspective-like vertical compression
    p.y = p.y * 2.2 - 0.15;

    // uFrequency: 5.5
    p *= 5.5;

    // ---- Domain warping (two-pass) ----
    // First warp
    vec2 q = vec2(
      fbm(p + vec2(0.0, 0.0) + t),
      fbm(p + vec2(5.2, 1.3) + t * 0.7)
    );

    // Second warp — uStrength: 1.5 controls blend intensity
    float f = fbm(p + 1.5 * q + vec2(t * 0.4, t * 0.3));

    // ---- Color gradient ----
    float grad = clamp(f * 0.5 + 0.5, 0.0, 1.0);

    // Crush midrange to dark — only peaks of the FBM waves touch orange
    grad = pow(grad, 2.8);

    // Tiny positional anchor so glow favors the upper area (not a wash)
    float posLift = (1.0 - uv.y) * 0.04 + uv.x * 0.02;
    grad = clamp(grad + posLift, 0.0, 1.0);

    // Three-stop color ramp: #0a0a0a → #1a0a00 → #ff6b1a
    vec3 c1 = vec3(0.039, 0.039, 0.039); // #0a0a0a  deep black
    vec3 c2 = vec3(0.102, 0.039, 0.000); // #1a0a00  near-black warm
    vec3 c3 = vec3(1.000, 0.420, 0.102); // #ff6b1a  orange accent

    // c1 → c2 covers most of the canvas; c3 only at the very top
    vec3 color = mix(c1, c2, smoothstep(0.0, 0.65, grad));
    color      = mix(color, c3, smoothstep(0.62, 1.0, grad));

    // brightness: 1.0 (multiply headroom for later tuning)
    color *= 1.0;

    gl_FragColor = vec4(color, 1.0);
  }
`

export default function HeroGLCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Dynamic import keeps ogl out of the main bundle
    let animId: number
    let isVisible = true
    let cleanup: (() => void) | null = null

    import('ogl').then(({ Renderer, Program, Triangle, Mesh }) => {
      const parent = canvas.parentElement
      const w = parent?.offsetWidth ?? window.innerWidth
      const h = parent?.offsetHeight ?? window.innerHeight

      const renderer = new Renderer({
        canvas,
        width: w,
        height: h,
        dpr: 1, // pixelDensity: 1 — mobile perf
        alpha: false,
      })
      const gl = renderer.gl

      const program = new Program(gl, {
        vertex: VERT,
        fragment: FRAG,
        uniforms: {
          uTime: { value: 0 },
        },
      })

      const geometry = new Triangle(gl)
      const mesh = new Mesh(gl, { geometry, program })

      // ---- Pause when scrolled past (IntersectionObserver) ----
      const observer = new IntersectionObserver(
        ([entry]) => { isVisible = entry.isIntersecting },
        { threshold: 0 },
      )
      observer.observe(canvas)

      // ---- Animation loop ----
      const render = (time: number) => {
        animId = requestAnimationFrame(render)
        if (!isVisible) return
        program.uniforms.uTime.value = time * 0.001
        renderer.render({ scene: mesh })
      }
      animId = requestAnimationFrame(render)

      // ---- Resize handling ----
      const handleResize = () => {
        const p = canvas.parentElement
        if (!p) return
        renderer.setSize(p.offsetWidth, p.offsetHeight)
      }
      const resizeObs = new ResizeObserver(handleResize)
      if (canvas.parentElement) resizeObs.observe(canvas.parentElement)

      cleanup = () => {
        cancelAnimationFrame(animId)
        observer.disconnect()
        resizeObs.disconnect()
        gl.getExtension('WEBGL_lose_context')?.loseContext()
      }
    })

    return () => {
      cancelAnimationFrame(animId)
      cleanup?.()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block', pointerEvents: 'none' }}
    />
  )
}
