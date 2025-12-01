import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-2 pt-20 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge
              variant="outline"
              className="border-emerald-500 text-emerald-700 dark:text-emerald-400"
            >
              🎓 Bizning Maktabimiz
              <ArrowUpRight className="ml-2 size-4 text-emerald-600" />
            </Badge>

            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl ">
              Zamonaviy Ta’lim va Yuksak Tarbiya Maskani
            </h1>

            <p className="text-foreground/75 mb-8 max-w-xl lg:text-xl">
              Maktabimizda o‘quvchilarga zamonaviy sharoitlar, ilg‘or
              metodikalar va malakali ustozlar tomonidan yuqori sifatli ta’lim
              beriladi. Har bir o‘quvchi o‘z qobiliyatlarini rivojlantirishi
              uchun keng imkoniyatlarga ega.
            </p>

            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button
                asChild
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600"
              >
                <Link to="/about">Maktab haqida</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto border-emerald-500 text-emerald-700 dark:text-emerald-400 hover:bg-green-100"
              >
                <Link to="/app">
                  Kirish
                  <ArrowRight className="size-4 ml-2 text-emerald-700  dark:text-emerald-400" />
                </Link>
              </Button>
            </div>
          </div>

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/50/50-sonli_maktab_binosi.jpg"
            alt="Maktab binosi, sinf xonalari yoki o‘quv jarayoni"
            className="max-h-96 w-full rounded-md object-cover shadow-lg border-2 border-emerald-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
