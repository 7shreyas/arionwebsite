// Pure CSS page transition — no hydration risk.
// template.tsx re-mounts on every route change, so the CSS animation
// replays automatically on each navigation.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="arion-page-enter">{children}</div>
}
