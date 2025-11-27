import * as z from "zod"

export const registerformSchema = z.object({
  firstName: z.string()
    .min(2, "ism 2 tadan kop bosin")
    .max(20, "ism 20 dan kam bolsin."),
  lastname:z.string()
    .min(2, "Familiya 2 tadan kop bosin.")
    .max(20, "Familiya  20 tadan kam bosin."),
  password: z.string()
    .min(8, "parol 8 tadan kop bolsin."),
  confirmPassword: z.string()
  .min(8,"qaytaruvchi parol 8 tadan kop bolsin") ,
  sinf: z.string()
    .min(3, "sinf kiritish shart"),
  email:z.string()
    .min(2, "Email 2 tadan kop bosin.")
    .max(20, "Email  20 tadan kam bosin."),
})
.refine((data)  => data.confirmPassword===data.password, {
    message:"qayta yozgan parolingiz hato",
    path:["confirmPassword"]
})
export  const loginformSchema = z.object({
   email:z.string()
    .min(2, "Email 2 tadan kop bosin.")
    .max(20, "Email  20 tadan kam bosin."),
  password: z.string()
    .min(8, "parol 8 tadan kop bolsin."),
})
