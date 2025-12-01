import { MapPin, Phone, Mail, Clock } from "lucide-react";

function Contact() {
  return (
    <div className="min-h-screen dark:bg-gray-950">
      <section className="bg-gradient-to-r pt-30 from-emerald-500 to-emerald-600 text-white py-16">
        <div className="max-w-7xl py-8 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Aloqa</h1>
          <p className="text-xl text-emerald-100">Biz bilan bog'laning</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground/90">
                Biz bilan bog'laning
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 rounded-full p-3">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground/90">
                      Manzil
                    </h3>
                    <p className="text-foreground/60">
                      Toshkent shahri, Chilonzor tumani, 12-kvartal
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 rounded-full p-3">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground/90">
                      Telefon
                    </h3>
                    <p className="text-foreground/60">+998 71 123 45 67</p>
                    <p className="text-foreground/60">+998 90 123 45 67</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 rounded-full p-3">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground/90">
                      Email
                    </h3>
                    <p className="text-foreground/60">info@menimaktabim.uz</p>
                    <p className="text-foreground/60">admin@menimaktabim.uz</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-sky-600 rounded-full p-3">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground-90">
                      Ish vaqti
                    </h3>
                    <p className="text-foreground/60">
                      Dushanba - Juma: 8:00 - 17:00
                    </p>
                    <p className="text-foreground/60">Shanba: 8:00 - 13:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dark:bg-gray-900 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground/90">
                Xabar yuborish
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">
                    Ismingiz
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-foreground/30 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                    placeholder="Ismingizni kiriting"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-foreground/30 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                    placeholder="Email manzilingizni kiriting"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">
                    Xabar
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-foreground/30 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                    placeholder="Xabaringizni yozing"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Yuborish
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
