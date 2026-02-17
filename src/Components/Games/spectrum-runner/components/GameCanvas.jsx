export default function GameCanvas({ canvasRef }) {
  return (
    <div className="relative flex justify-center w-full">
      <div className="absolute inset-0 rounded shadow-[0_0_60px_#00f7ff]" />
      <canvas
        ref={canvasRef}
        className="relative border-2 border-[#00f7ff] bg-black max-w-full"
        style={{
          aspectRatio: "1100 / 620",
          width: "100%",
          maxWidth: "1100px",
        }}
      />
    </div>
  );
}
