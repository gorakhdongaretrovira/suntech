import images from "../data/images";

export default function PhotoGallery() {
  return (
    <main className="min-h-screen bg-[#0e1c2f] px-6 py-20 text-white">

      <h1 className="text-4xl font-bold text-center mb-12">
        Photo Gallery
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-lg">
            <img
              src={img.src}
              className="w-full h-48 object-cover hover:scale-110 transition"
            />
          </div>
        ))}
      </div>

    </main>
  );
}