import AboutSection from "@/components/about";
import ContactSection from "@/components/contact";
import { Feature } from "@/components/feature";
import Hero from "@/components/hero";
import { Award, BookOpen, Globe, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const nav = useNavigate();
  return (
    <div className="">
      <Hero />
      <section id="info" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Bizning Afzalliklarimiz
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-blue-50 hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Sifatli Ta'lim
              </h3>
              <p className="text-gray-600">
                Zamonaviy o'quv dasturlari va tajribali ustozlar bilan yuqori
                sifatli ta'lim
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-green-50 hover:shadow-lg transition-shadow">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Do'stona Muhit
              </h3>
              <p className="text-gray-600">
                O'quvchilar uchun qulay va do'stona muhit, ijodiy rivojlanish
                imkoniyatlari
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-orange-50 hover:shadow-lg transition-shadow">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Yuqori Natijalar
              </h3>
              <p className="text-gray-600">
                O'quvchilarimiz olimpiada va tanlovlarda muntazam g'olib
                bo'lishadi
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-sky-50 hover:shadow-lg transition-shadow">
              <div className="bg-sky-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Xalqaro Aloqalar
              </h3>
              <p className="text-gray-600">
                Xalqaro hamkorlik va talabalar almashinuvi dasturlari
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Nega Bizni Tanlash Kerak?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 rounded-full p-1 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    20 yillik tajriba va minglab muvaffaqiyatli bitiruvchilar
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 rounded-full p-1 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Zamonaviy kompyuter xonalari va laboratoriyalar
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 rounded-full p-1 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Sport zallari, kutubxona va qo'shimcha to'garaklar
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 rounded-full p-1 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Malakali pedagog kadrlar va individual yondashuv
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 text-center">
              <h3 className="text-5xl font-bold text-blue-600 mb-2">500+</h3>
              <p className="text-gray-700 mb-6">Faol o'quvchilar</p>
              <h3 className="text-5xl font-bold text-green-600 mb-2">98%</h3>
              <p className="text-gray-700 mb-6">OTMga kirish ko'rsatkichi</p>
              <h3 className="text-5xl font-bold text-orange-600 mb-2">50+</h3>
              <p className="text-gray-700">Professional ustozlar</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bizning Jamoaga Qo'shiling!
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Kelajakni birga quramiz. Maktabimizga xush kelibsiz!
          </p>
          <button
            onClick={() => nav("/login")}
            className="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg text-lg"
          >
            Hoziroq Kirish
          </button>
        </div>
      </section>
      <Feature />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

export default HomePage;
