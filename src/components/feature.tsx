import {
  BatteryCharging,
  GitPullRequest,
  Layers,
  RadioTower,
  SquareKanban,
  WandSparkles,
} from "lucide-react";
import React from "react";

interface Feature {
  heading: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureProps {
  title?: string;
  features?: Feature[];
}

const Feature = ({
  title = "Maktabimizning afzalliklari",
  features = [
    {
      heading: "Sifat",
      description:
        "Darslar va materiallar yuqori sifatda tayyorlangan. Har bir fan darslari o‘quvchilarning tushunishiga qulay va samarali.",
      icon: <GitPullRequest />,
    },
    {
      heading: "Tajriba",
      description:
        "O‘quvchilarning qulayligi va oson tushunishiga e’tibor qaratilgan. Darslar interaktiv va qiziqarli shaklda o‘tiladi.",
      icon: <SquareKanban />,
    },
    {
      heading: "Qo‘llab-quvvatlash",
      description:
        "O‘qituvchilar va ota-onalar uchun to‘liq ma’lumot va yordam mavjud. Har doim savollarga javob beriladi va maslahatlar taqdim etiladi.",
      icon: <RadioTower />,
    },
    {
      heading: "Yangi yondashuvlar",
      description:
        "O‘quv jarayonida zamonaviy metodlar qo‘llaniladi. Innovatsion darslar o‘quvchilarning bilimini oshiradi.",
      icon: <WandSparkles />,
    },
    {
      heading: "Natijalar",
      description:
        "O‘quvchilarimizning bilim darajasi va muvaffaqiyatlari bizning ishonchimiz belgisi. Ular imtihonlarda va tanlovlarda yaxshi natija ko‘rsatadi.",
      icon: <Layers />,
    },
    {
      heading: "Samaradorlik",
      description:
        "Darslar samarali va oson o‘zlashtiriladigan qilib tuzilgan. Vaqtni tejash va bilim olishni tezlashtirishga yordam beradi.",
      icon: <BatteryCharging />,
    },
  ],
}: FeatureProps) => {
  return (
    <section className="py-28">
      <div className="container mx-auto">
        {title && (
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#99BAB9] to-[#FAEDCD]">
                {title}
              </span>
            </h1>
            <p className="mt-3 text-[#99BAB9]">
              Bizning maktabning eng yaxshi afzalliklari bilan tanishing
            </p>
          </div>
        )}

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl bg-white shadow-md border border-[#CDD4B1] hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#99BAB9] to-[#FAEDCD] transition-transform duration-300 group-hover:scale-110">
                {React.cloneElement(feature.icon as React.ReactElement, {
                  className: "w-7 h-7 text-white",
                })}
              </div>

              {/* Heading */}
              <h3 className="mb-3 text-2xl font-semibold text-[#7C9F9E]">
                {feature.heading}
              </h3>

              {/* Description */}
              <p className="text-[#99BAB9] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature };
