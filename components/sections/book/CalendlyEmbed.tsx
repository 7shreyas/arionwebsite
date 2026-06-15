export default function CalEmbed() {
  return (
    <div
      className="overflow-hidden bg-white border-2 border-[#2d2d2d] shadow-[5px_5px_0px_0px_#2d2d2d]"
      style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
    >
      <iframe
        src="https://cal.com/arion-ai-solutions-a8krcs/30min?embed=true&theme=light"
        width="100%"
        height="700"
        style={{ border: "none", display: "block" }}
        title="Book a 30-minute demo with Arion AI"
        loading="lazy"
        allow="camera; microphone"
      />
    </div>
  );
}
