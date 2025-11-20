import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { STUDENTS } from "@/constants";
import type { Student } from "@/types/bitiruvchi";

export default function StatistikaBitiruvchilarPage() {
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
    <div className="min-h-screen bg-foreground/2 p-6">
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
              <p className="text-foreground/70 text-base">{submittedQuery || "—"}</p>
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
