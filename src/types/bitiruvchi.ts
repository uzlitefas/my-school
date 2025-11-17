export type Certificate = {
  subject: string;
  result: number | string;
};

export type Student = {
  id: number;
  fname: string;
  lname: string;
  class: string;
  year: string;
  graduated: boolean;
  score: number;
  birthday: string;
  image: string;
  address: string;
  phone: string;
  parent: string;
  notes: string;
  teacher: string;
  certificate: Certificate[];
};
