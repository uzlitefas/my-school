import { Target, Eye, Heart } from "lucide-react";

function About() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Maktabimiz Haqida
          </h1>
          <p className="text-xl text-blue-100">Bilim va tarbiya markazi</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 rounded-xl bg-blue-50">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Maqsadimiz
              </h3>
              <p className="text-gray-600">
                Har bir o'quvchini bilimli, ma'naviyatli va vatanparvar shaxs
                sifatida tarbiyalash
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-green-50">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Vazifamiz
              </h3>
              <p className="text-gray-600">
                Zamonaviy ta'lim texnologiyalari orqali yuqori sifatli bilim
                berish
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-orange-50">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Qadriyatlarimiz
              </h3>
              <p className="text-gray-600">
                Halollik, mas'uliyat, hurmat va doimiy o'sish
              </p>
            </div>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Maktabimiz Tarixi
            </h2>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Maktabimiz 2003-yilda tashkil etilgan bo'lib, 20 yildan ortiq vaqt
              davomida minglab o'quvchilarni hayotga tayyorlab kelmoqda. Biz
              faqat bilim berishni emas, balki o'quvchilarni har tomonlama
              rivojlantirish, ularning ijodiy qobiliyatlarini ro'yobga chiqarish
              va kelajak uchun poydevor yaratishni o'z oldimizga maqsad qilib
              qo'yganmiz.
            </p>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Bugungi kunda maktabimizda 500 dan ortiq o'quvchi ta'lim olmoqda.
              Bizning o'qituvchilar jamoasi 50 dan ortiq malakali va tajribali
              pedagog kadrlardan iborat. Har bir o'qituvchi o'z sohasining
              mutaxassisi bo'lib, o'quvchilarga individual yondashuv asosida
              ta'lim berishadi.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
            Imkoniyatlarimiz
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-blue-600">
                Zamonaviy Texnologiyalar
              </h3>
              <p className="text-gray-700">
                Kompyuter xonalari, interaktiv doskalar va zamonaviy o'quv
                qurollari
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-blue-600">
                Sport Majmuasi
              </h3>
              <p className="text-gray-700">
                Zamonaviy sport zali, futbol va basketbol maydonlari
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-blue-600">
                Keng Kutubxona
              </h3>
              <p className="text-gray-700">
                10000 dan ortiq kitob va elektron resurslar
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-blue-600">
                To'garaklar
              </h3>
              <p className="text-gray-700">
                Robotexnika, shaxmat, musiqa, san'at va boshqa ko'plab
                to'garaklar
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
