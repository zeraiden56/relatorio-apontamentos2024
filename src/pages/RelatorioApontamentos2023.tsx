export default function RelatorioApontamentos2023() {
  // só o ID do seu arquivo
  const fileId = "1uBhUyTe8kbvXC20WouVInKzqlCIy2x2V";
  const src = `https://drive.google.com/file/d/1uBhUyTe8kbvXC20WouVInKzqlCIy2x2V/preview`;

  return (
    <div className="p-6 bg-off-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Relatório de Apontamentos 2023</h1>
      <iframe
        src={src}
        width="100%"
        height="800"
        frameBorder="0"
        allow="autoplay; encrypted-media; fullscreen"
        title="Relatório Apontamentos 2023"
      />
    </div>
  );
}



