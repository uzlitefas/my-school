import * as z from "zod";

export const loginformSchema = z.object({
  email: z
    .string()
    .min(2, "Email 2 tadan kop bosin.")
    .max(20, "Email  20 tadan kam bosin."),
  password: z.string().min(8, "parol 8 tadan kop bolsin."),
});
