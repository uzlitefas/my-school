import { cn } from "@/lib/utils"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Field,
  FieldDescription,
  FieldGroup,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {  registerformSchema } from "@/lib/vlidation"

export function RegisterForm({ className, ...props }: React.ComponentProps<"form">) {
  
  // ❗ Hooklar faqat komponent boshida bo'ladi
  const form = useForm<z.infer<typeof registerformSchema>>({
    resolver: zodResolver(registerformSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastname: "",
      confirmPassword: "",
        sinf: "",
    },
  })

  // ✔ To'g'ri joyda submit funksiyasi
  function onSubmit(data: z.infer<typeof registerformSchema>) {
    console.log(data)
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >

      <FieldGroup>
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold">Hisobingizga kiring</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Hisobingizga kirish uchun quyida elektron pochtangizni kiriting
          </p>
        </div>
        {/* firstName */}
        <Field>
          <Input
            id="firstName"
            type="text"
            placeholder="Ismingizni kiriting"
            {...form.register("firstName")}
          />
        </Field>
        {/* lastName */}
        <Field>
            <Input
            id="lastname"
            type="text" 
            placeholder="Familiyangizni kiriting"
            {...form.register("lastname")}
          />
        </Field>
          {/* EMAIL */}
        <Field>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            {...form.register("email")}
          />
        </Field>
         {/* sinf */}
        <Field>
            <Input
            id="sinf"
            placeholder="Sinfingizni kiriting"
            {...form.register("sinf")}
          />
        </Field>
        {/* PASSWORD */}
        <Field>
         
          <Input id="password" type="password" placeholder="Parolni kiriting" {...form.register("password")} />
        </Field>
         {/* confirmPassword */}
        <Field>
            <Input
            id="confirmPassword"
            type="password"
            placeholder="Parolingizni qayta kiriting"
            {...form.register("confirmPassword")}
          />
        </Field>
       
        <Field>
          <Button type="submit">Login</Button>
           <div className="flex items-center">
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
        </Field>
        <Field>
         
          <FieldDescription className="text-center">
            Don&apos;t have an account?{" "}
            <a href="#" className="underline underline-offset-4">
              Sign up
            </a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
