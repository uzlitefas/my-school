import { Image } from "lucide-react";

function Gallery() {
  const images = [
    { id: 1, title: "Maktab binosi", category: "Bino" },
    { id: 2, title: "Kompyuter xonasi", category: "Xonalar" },
    { id: 3, title: "Sport zali", category: "Sport" },
    { id: 4, title: "Kutubxona", category: "Xonalar" },
    { id: 5, title: "Laboratoriya", category: "Xonalar" },
    { id: 6, title: "Tadbirlar", category: "Tadbirlar" },
    { id: 7, title: "O'quvchilar", category: "Hayot" },
    { id: 8, title: "Darsliklar", category: "Hayot" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galareya</h1>
          <p className="text-xl text-blue-100">
            Maktabimizning hayoti va tadbirlari
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all">
                  <Image className="h-16 w-16 text-blue-600" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900">
                    {image.title}
                  </h3>
                  <p className="text-sm text-gray-600">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
