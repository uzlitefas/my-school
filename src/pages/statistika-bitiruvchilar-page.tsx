import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, TrendingUp } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { STUDENTS } from "@/constants";
import type { Student } from "@/types/bitiruvchi";

export default function StatistikaBitiruvchilarPage() {
  const graduates = [
    {
      year: "2024",
      count: 85,
      university: "78 nafar OTMga kirdi",
      achievements: "15 ta olimpiada g'olibi",
    },
    {
      year: "2023",
      count: 92,
      university: "87 nafar OTMga kirdi",
      achievements: "20 ta olimpiada g'olibi",
    },
    {
      year: "2022",
      count: 88,
      university: "82 nafar OTMga kirdi",
      achievements: "12 ta olimpiada g'olibi",
    },
  ];

  const topGraduates = [
    {
      name: "Aziza Karimova",
      year: "2024",
      achievement: "TDTU - 100% grant",
      field: "Dasturiy ta'minot",
    },
    {
      name: "Sardor Toshmatov",
      year: "2024",
      achievement: "TATU - 100% grant",
      field: "Kiberhavfsizlik",
    },
    {
      name: "Nilufar Rahimova",
      year: "2023",
      achievement: "WIUT - 50% grant",
      field: "Biznes",
    },
    {
      name: "Bekzod Aliyev",
      year: "2023",
      achievement: "Westminster - Full grant",
      field: "Iqtisodiyot",
    },
  ];

  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Student | null>(null);
  const [submittedQuery, setSubmittedQuery] = useState("");

  const filtered = useMemo(() => {
    if (!submittedQuery) return STUDENTS;
    const q = submittedQuery.trim().toLowerCase();
    return STUDENTS.filter(
      (s) =>
        s.fname.toLowerCase().includes(q) ||
        s.lname.toLowerCase().includes(q) ||
        s.year.toLowerCase().includes(q)
    );
  }, [submittedQuery]);

  function handleSearch() {
    setSubmittedQuery(query);
  }
  function handleReset() {
    setQuery("");
    setSubmittedQuery("");
  }

  return (
    <div className="min-h-screen bg-foreground/2">
      {" "}
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Bitiruvchilar
            </h1>
            <p className="text-xl text-blue-100">
              Bizning faxrimiz va muvaffaqiyatimiz
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {graduates.map((grad) => (
                <div
                  key={grad.year}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow"
                >
                  <div className="text-center">
                    <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {grad.year}
                    </h3>
                    <p className="text-4xl font-bold text-blue-600 mb-4">
                      {grad.count}
                    </p>
                    <p className="text-gray-700 mb-2">{grad.university}</p>
                    <p className="text-gray-600 text-sm">{grad.achievements}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
                A'lo Bitiruvchilar
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {topGraduates.map((graduate, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl p-6 hover:border-blue-600 transition-colors"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-full p-3">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900">
                          {graduate.name}
                        </h3>
                        <p className="text-blue-600 font-semibold">
                          {graduate.achievement}
                        </p>
                        <p className="text-gray-600">{graduate.field}</p>
                        <p className="text-sm text-gray-500">
                          {graduate.year}-yil bitiruvchisi
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="text-center">
                <TrendingUp className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  Statistika
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <p className="text-5xl font-bold text-blue-600 mb-2">98%</p>
                    <p className="text-gray-700">OTMga kirish ko'rsatkichi</p>
                  </div>
                  <div>
                    <p className="text-5xl font-bold text-green-600 mb-2">
                      250+
                    </p>
                    <p className="text-gray-700">
                      Grantga o'qigan bitiruvchilar
                    </p>
                  </div>
                  <div>
                    <p className="text-5xl font-bold text-orange-600 mb-2">
                      47
                    </p>
                    <p className="text-gray-700">Olimpiada g'oliblari</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container mx-auto my-30">
        <header className="mb-6 text-center">
          <h1 className="text-4xl font-bold mb-2">
            Statistika Bitiruvchilari Natijalari
          </h1>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Maktab bitiruvchilari ro'yxati. Qidiruv maydoniga ism yoki yil yozib
            "Qidirish" tugmasini bosing.
          </p>
        </header>

        <div className="max-w-3xl mx-auto flex max-[470px]:flex-col gap-3 mb-8 items-center">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Ism yoki yil"
            className="flex-1 max-[470px]:w-full p-2 px-3 rounded-lg border border-foreground/30 bg-background"
          />
          <Button
            size={"lg"}
            onClick={handleSearch}
            className="rounded-lg px-6 max-[470px]:w-full"
          >
            Qidirish
          </Button>
          <Button
            size={"lg"}
            onClick={handleReset}
            className="rounded-lg px-4 max-[470px]:w-full"
            variant="outline"
          >
            Tozalash
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="rounded-2xl shadow-lg bg-background">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">Jami talabalar</h2>
              <p className="text-foreground/70 text-base">{STUDENTS.length}</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-lg bg-background">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">Qidiruv natijalari</h2>
              <p className="text-foreground/70 text-base">
                {filtered.length} topildi
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-lg bg-background">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">So‘nggi so‘rov</h2>
              <p className="text-foreground/70 text-base">
                {submittedQuery || "—"}
              </p>
            </CardContent>
          </Card>
        </div>

        <section className="rounded-2xl border shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Topilgan bitiruvchilar
          </h2>
          {filtered.length === 0 ? (
            <p className="text-foreground/50">
              Natija topilmadi — boshqa so‘z bilan qidiring.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-sm text-foreground/60 border-b">
                    <th className="p-3">#</th>
                    <th className="p-3">Ismi</th>
                    <th className="p-3">Familyasi</th>
                    <th className="p-3">Sinfi</th>
                    <th className="p-3">Yili</th>
                    <th className="p-3">Natija bali</th>
                    <th className="p-3">Holati</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((s, idx) => (
                    <tr
                      key={s.id}
                      className="odd:bg-foreground/2 cursor-pointer"
                      onClick={() => setSelected(s)}
                    >
                      <td className="p-3 align-top">{idx + 1}</td>
                      <td className="p-3 align-top font-medium">{s.fname}</td>
                      <td className="p-3 align-top">{s.lname}</td>
                      <td className="p-3 align-top">{s.class}</td>
                      <td className="p-3 align-top">{s.year}</td>
                      <td className="p-3 align-top">{s.score}</td>
                      <td className="p-3 align-top">
                        {s.graduated ? (
                          <Badge className="bg-green-500 text-white">
                            Bitirgan
                          </Badge>
                        ) : (
                          <Badge className="bg-red-500 text-white">
                            Bitirmagan
                          </Badge>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <Sheet open={!!selected} onOpenChange={() => setSelected(null)}>
          <SheetContent
            side="right"
            className="w-full max-w-md p-0 overflow-hidden"
          >
            <div className="p-6">
              {selected && (
                <div className="space-y-4">
                  <SheetHeader>
                    <SheetTitle>
                      {selected.fname} {selected.lname}
                    </SheetTitle>
                  </SheetHeader>
                  <img
                    src={selected.image}
                    alt="rasm"
                    className="w-full h-56 object-cover rounded-xl"
                  />
                  <p>
                    <strong>Ismi:</strong> {selected.fname}
                  </p>
                  <p>
                    <strong>Familyasi:</strong> {selected.lname}
                  </p>
                  <p>
                    <strong>Sinfi:</strong> {selected.class}
                  </p>
                  <p>
                    <strong>Bitiruv yili:</strong> {selected.year}
                  </p>
                  <p>
                    <strong>Tug‘ilgan kuni:</strong> {selected.birthday}
                  </p>
                  <p>
                    <strong>Manzili:</strong> {selected.address}
                  </p>
                  <p>
                    <strong>Telefon:</strong> {selected.phone}
                  </p>
                  <p>
                    <strong>Ota-ona:</strong> {selected.parent}
                  </p>
                  <p>
                    <strong>O'qituvchi:</strong> {selected.teacher}
                  </p>
                  <p>
                    <strong>Sertifikatlar:</strong>
                  </p>
                  <ul className="list-disc list-inside">
                    {selected.certificate.length > 0 ? (
                      selected.certificate.map((c, idx) => (
                        <li key={idx}>
                          {c.subject}: {c.result}
                        </li>
                      ))
                    ) : (
                      <li>Yo‘q</li>
                    )}
                  </ul>
                  <p>
                    <strong>Natija bali:</strong> {selected.score}
                  </p>
                  <p>
                    <strong>Holati:</strong>{" "}
                    {selected.graduated ? "Bitirgan" : "Bitirmagan"}
                  </p>
                  <p>
                    <strong>Izohlar:</strong> {selected.notes}
                  </p>
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
