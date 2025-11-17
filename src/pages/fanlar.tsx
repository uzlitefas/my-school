import { useState } from "react";
import {
  Calculator,
  BookOpen,
  Leaf,
  Music,
  Trophy,
  Award,
  Medal,
  Star,
  FlaskConical,
  Monitor,
  Dumbbell,
  Library,
  Utensils,
  HeartPulse,
  Users,
  GraduationCap,
  Building,
  ChevronRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  schoolInfo,
  educationalDirections,
  subjects,
  achievements,
  facilities,
} from "@/constants/index";

const iconMap: { [key: string]: React.ReactNode } = {
  calculator: <Calculator className="w-6 h-6" />,
  "book-open": <BookOpen className="w-6 h-6" />,
  leaf: <Leaf className="w-6 h-6" />,
  music: <Music className="w-6 h-6" />,
  trophy: <Trophy className="w-6 h-6" />,
  award: <Award className="w-6 h-6" />,
  medal: <Medal className="w-6 h-6" />,
  star: <Star className="w-6 h-6" />,
  "flask-conical": <FlaskConical className="w-6 h-6" />,
  monitor: <Monitor className="w-6 h-6" />,
  dumbbell: <Dumbbell className="w-6 h-6" />,
  library: <Library className="w-6 h-6" />,
  utensils: <Utensils className="w-6 h-6" />,
  "heart-pulse": <HeartPulse className="w-6 h-6" />,
};

export default function FanlarPage() {
  const [selectedDirection, setSelectedDirection] = useState(
    educationalDirections[0]
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="School building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-sm font-medium">
              {schoolInfo.establishedYear}-yildan beri faoliyat yuritmoqda
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {schoolInfo.name}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            {schoolInfo.motto}
          </p>
          <p className="text-lg mb-8 text-slate-300 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            {schoolInfo.description}
          </p>
          <Button
            size="lg"
            className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 group"
          >
            Ko'proq ma'lumot
            <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-10" />
      </section>

      <section className="container py-16 px-4 mx-auto -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white/95 backdrop-blur-sm border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">
                    {schoolInfo.studentsCount}
                  </p>
                  <p className="text-sm text-slate-600">O'quvchilar</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <GraduationCap className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">
                    {schoolInfo.teachersCount}
                  </p>
                  <p className="text-sm text-slate-600">O'qituvchilar</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-100 rounded-full">
                  <Building className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">
                    {schoolInfo.classroomsCount}
                  </p>
                  <p className="text-sm text-slate-600">Xonalar</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Ta'lim Yo'nalishlari
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Har bir o'quvchining qobiliyatiga mos yo'nalishni tanlash
              imkoniyati
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {educationalDirections.map((direction, index) => (
              <Card
                key={direction.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden group ${
                  selectedDirection.id === direction.id
                    ? "ring-2 ring-slate-900"
                    : ""
                }`}
                onClick={() => setSelectedDirection(direction)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={direction.image}
                    alt={direction.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${direction.color} opacity-60 group-hover:opacity-70 transition-opacity`}
                  />
                  <div className="absolute top-4 right-4 p-2 bg-white/90 rounded-full">
                    {iconMap[direction.icon]}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{direction.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {direction.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div
                  className={`p-4 bg-gradient-to-br ${selectedDirection.color} rounded-xl text-white`}
                >
                  {iconMap[selectedDirection.icon]}
                </div>
                <div>
                  <CardTitle className="text-2xl">
                    {selectedDirection.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {selectedDirection.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {selectedDirection.subjects.map((subject) => (
                  <Badge
                    key={subject}
                    variant="secondary"
                    className="px-4 py-2 text-sm"
                  >
                    {subject}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Fanlar
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Zamonaviy usullar bilan o'qitiladigan turli fanlar
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="all">Barchasi</TabsTrigger>
              <TabsTrigger value="Aniq fanlar">Aniq</TabsTrigger>
              <TabsTrigger value="Gumanitar fanlar">Gumanitar</TabsTrigger>
              <TabsTrigger value="Tabiiy fanlar">Tabiiy</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {subjects.map((subject, index) => (
                  <Card
                    key={subject.id}
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={subject.image}
                        alt={subject.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {subject.name}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {subject.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="pt-4">
                      <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                        {subject.description}
                      </p>
                      <div className="flex justify-between text-xs text-slate-500">
                        <span>{subject.teachersCount} o'qituvchi</span>
                        <span>{subject.weeklyHours} soat/hafta</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {["Aniq fanlar", "Gumanitar fanlar", "Tabiiy fanlar"].map(
              (category) => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {subjects
                      .filter((subject) => subject.category === category)
                      .map((subject, index) => (
                        <Card
                          key={subject.id}
                          className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={subject.image}
                              alt={subject.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                              <h3 className="text-xl font-bold text-white mb-1">
                                {subject.name}
                              </h3>
                              <Badge variant="secondary" className="text-xs">
                                {subject.category}
                              </Badge>
                            </div>
                          </div>
                          <CardContent className="pt-4">
                            <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                              {subject.description}
                            </p>
                            <div className="flex justify-between text-xs text-slate-500">
                              <span>{subject.teachersCount} o'qituvchi</span>
                              <span>{subject.weeklyHours} soat/hafta</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              )
            )}
          </Tabs>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Yutuqlarimiz
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              O'quvchilarimizning erishgan natijalari
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={achievement.id}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8">
                  <div className="inline-flex p-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-4">
                    {iconMap[achievement.icon]}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">
                    {achievement.description}
                  </p>
                  <Badge variant="outline">{achievement.year}-yil</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Imkoniyatlarimiz
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Zamonaviy jihozlar va qulay sharoitlar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <Card
                key={facility.id}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      {iconMap[facility.icon]}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">
                        {facility.name}
                      </h3>
                      <p className="text-sm text-slate-300">
                        {facility.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bizga Qo'shiling!
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Kelajagingizni bugun qurishni boshlang. 1-Maktabda sifatli ta'lim
            oling!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="group">
              Ro'yxatdan o'tish
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
            >
              Ekskursiya
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
