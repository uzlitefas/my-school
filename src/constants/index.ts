export const STUDENTS = [
  {
    id: 1,
    fname: "Ali",
    lname: "Karimov",
    class: "9-A",
    year: "2025",
    graduated: true,
    score: 180,
    birthday: "2009-04-12",
    image: "/ali.jpg",
    address: "Toshkent, Chilonzor",
    phone: "+998901234567",
    parent: "Ota: Karim, Ona: Malika",
    notes: "Excellent student",
    teacher: "Mr. Akmal",
    certificate: [
      { subject: "English", result: 8.2 },
      { subject: "Math", result: 9.5 },
    ],
  },
  {
    id: 2,
    fname: "Laylo",
    lname: "Ergasheva",
    class: "9-B",
    year: "2025",
    graduated: false,
    score: 120,
    birthday: "2009-01-20",
    image: "/laylo.jpg",
    address: "Toshkent, Yunusobod",
    phone: "+998901112233",
    parent: "Ota: Ergashev, Ona: Dilbar",
    notes: "Needs improvement",
    teacher: "Ms. Nilufar",
    certificate: [],
  },
  {
    id: 3,
    fname: "Javlon",
    lname: "Ismoilov",
    class: "9-A",
    year: "2025",
    graduated: true,
    score: 190,
    birthday: "2009-03-05",
    image: "/javlon.jpg",
    address: "Toshkent, Mirzo Ulugbek",
    phone: "+998902223344",
    parent: "Ota: Ismoil, Ona: Nilufar",
    notes: "Top scorer",
    teacher: "Mr. Akmal",
    certificate: [{ subject: "Physics", result: 9.0 }],
  },
  {
    id: 4,
    fname: "Nigora",
    lname: "Tursunova",
    class: "9-C",
    year: "2025",
    graduated: true,
    score: 160,
    birthday: "2009-06-18",
    image: "/nigora.jpg",
    address: "Toshkent, Sergeli",
    phone: "+998903334455",
    parent: "Ota: Tursun, Ona: Shirin",
    notes: "Active in sports",
    teacher: "Ms. Dildora",
    certificate: [{ subject: "Sports", result: "Gold Medal" }],
  },
  {
    id: 5,
    fname: "Bekzod",
    lname: "Rasulov",
    class: "9-B",
    year: "2025",
    graduated: false,
    score: 100,
    birthday: "2009-02-10",
    image: "/bekzod.jpg",
    address: "Toshkent, Yashnobod",
    phone: "+998904445566",
    parent: "Ota: Rasul, Ona: Madina",
    notes: "Struggling",
    teacher: "Ms. Nilufar",
    certificate: [],
  },
];

export const schoolInfo = {
  name: "1-Maktab",
  motto: "Bilim - kelajak kaliti",
  description:
    "Zamonaviy ta'lim texnologiyalari va yuqori malakali o'qituvchilar bilan ta'minlangan maktabimiz har bir o'quvchining shaxsini rivojlantirishga qaratilgan.",
  establishedYear: 2010,
  studentsCount: 850,
  teachersCount: 65,
  classroomsCount: 32,
};

export const educationalDirections = [
  {
    id: 1,
    title: "Aniq Fanlar Yo'nalishi",
    description:
      "Matematika, fizika va informatika fanlariga chuqur e'tibor beriladi",
    icon: "calculator",
    subjects: ["Matematika", "Fizika", "Informatika", "Kimyo"],
    image:
      "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Gumanitar Fanlar Yo'nalishi",
    description: "Adabiyot, tarix va tillarni o'rganishga alohida e'tibor",
    icon: "book-open",
    subjects: ["Adabiyot", "Tarix", "Ingliz tili", "Rus tili"],
    image:
      "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 3,
    title: "Tabiiy Fanlar Yo'nalishi",
    description:
      "Biologiya, ekologiya va geografiya fanlarini chuqur o'rganish",
    icon: "leaf",
    subjects: ["Biologiya", "Geografiya", "Kimyo", "Ekologiya"],
    image:
      "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "San'at va Sport",
    description: "Ijodiy qobiliyatlar va jismoniy tarbiyani rivojlantirish",
    icon: "music",
    subjects: ["Musiqa", "Tasviriy san'at", "Jismoniy tarbiya", "Xoreografiya"],
    image:
      "https://images.pexels.com/photos/1925530/pexels-photo-1925530.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "from-purple-500 to-pink-500",
  },
];

export const subjects = [
  {
    id: 1,
    name: "Matematika",
    category: "Aniq fanlar",
    description:
      "Mantiqiy fikrlash va muammolarni yechish ko'nikmalarini rivojlantiradi",
    image:
      "https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=800",
    teachersCount: 8,
    weeklyHours: 6,
  },
  {
    id: 2,
    name: "Fizika",
    category: "Aniq fanlar",
    description:
      "Tabiat qonuniyatlarini o'rganish va amaliy tajribalar o'tkazish",
    image:
      "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800",
    teachersCount: 5,
    weeklyHours: 4,
  },
  {
    id: 3,
    name: "Informatika",
    category: "Aniq fanlar",
    description: "Dasturlash va zamonaviy texnologiyalarni o'rganish",
    image:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
    teachersCount: 6,
    weeklyHours: 3,
  },
  {
    id: 4,
    name: "Adabiyot",
    category: "Gumanitar fanlar",
    description: "Jahon va milliy adabiyot namunalarini o'rganish",
    image:
      "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800",
    teachersCount: 7,
    weeklyHours: 4,
  },
  {
    id: 5,
    name: "Ingliz tili",
    category: "Gumanitar fanlar",
    description: "Xalqaro muloqot uchun chet tilini o'rganish",
    image:
      "https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=800",
    teachersCount: 9,
    weeklyHours: 5,
  },
  {
    id: 6,
    name: "Biologiya",
    category: "Tabiiy fanlar",
    description: "Tirik organizmlar va hayot jarayonlarini o'rganish",
    image:
      "https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=800",
    teachersCount: 4,
    weeklyHours: 3,
  },
  {
    id: 7,
    name: "Kimyo",
    category: "Tabiiy fanlar",
    description: "Moddalar tuzilishi va o'zgarishlarini o'rganish",
    image:
      "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=800",
    teachersCount: 4,
    weeklyHours: 3,
  },
  {
    id: 8,
    name: "Tarix",
    category: "Gumanitar fanlar",
    description: "O'tmishdan saboq olish va tarixiy voqealarni o'rganish",
    image:
      "https://images.pexels.com/photos/4132939/pexels-photo-4132939.jpeg?auto=compress&cs=tinysrgb&w=800",
    teachersCount: 5,
    weeklyHours: 3,
  },
];

export const achievements = [
  {
    id: 1,
    title: "Respublika olimpiadasi",
    description: "Matematika fanidan 1-o'rin",
    year: 2024,
    icon: "trophy",
  },
  {
    id: 2,
    title: "Xalqaro tanlov",
    description: "Informatika bo'yicha bronza medal",
    year: 2024,
    icon: "award",
  },
  {
    id: 3,
    title: "Sport musobaqasi",
    description: "Viloyat chempionati g'olibi",
    year: 2023,
    icon: "medal",
  },
  {
    id: 4,
    title: "Ijodiy festival",
    description: "Eng yaxshi ijro uchun Gran-pri",
    year: 2023,
    icon: "star",
  },
];

export const facilities = [
  {
    id: 1,
    name: "Zamonaviy Laboratoriyalar",
    description: "Fizika, kimyo va biologiya laboratoriyalari",
    icon: "flask-conical",
  },
  {
    id: 2,
    name: "Axborot Texnologiyalari Xonasi",
    description: "Zamonaviy kompyuterlar bilan jihozlangan",
    icon: "monitor",
  },
  {
    id: 3,
    name: "Sport Majmuasi",
    description: "Basketbol, voleybol va futbol maydonlari",
    icon: "dumbbell",
  },
  {
    id: 4,
    name: "Kutubxona",
    description: "10,000 dan ortiq kitob va elektron manbalar",
    icon: "library",
  },
  {
    id: 5,
    name: "Oshxona",
    description: "Sog'lom va mazali taomlar tayyorlanadi",
    icon: "utensils",
  },
  {
    id: 6,
    name: "Tibbiy Xona",
    description: "Malakali shifokorlar tomonidan xizmat ko'rsatiladi",
    icon: "heart-pulse",
  },
];
