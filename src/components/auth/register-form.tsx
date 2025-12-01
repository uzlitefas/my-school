import { cn } from "@/lib/utils";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { registerformSchema } from "@/lib/vlidation";
import { Link } from "react-router-dom";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
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
  });

  function onSubmit(data: z.infer<typeof registerformSchema>) {
    console.log(data);
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold text-emerald-600">
            Ro'yxatdan o'ting
          </h1>
          <p className="text-emerald-500 text-sm">
            Hisobingizni yaratish uchun quyidagi ma'lumotlarni kiriting
          </p>
        </div>

        <Field>
          <Input
            id="firstName"
            type="text"
            placeholder="Ismingizni kiriting"
            className="focus:border-emerald-500 focus:ring-emerald-500"
            {...form.register("firstName")}
          />
        </Field>

        <Field>
          <Input
            id="lastname"
            type="text"
            placeholder="Familiyangizni kiriting"
            className="focus:border-emerald-500 focus:ring-emerald-500"
            {...form.register("lastname")}
          />
        </Field>

        <Field>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            className="focus:border-emerald-500 focus:ring-emerald-500"
            {...form.register("email")}
          />
        </Field>

        <Field>
          <Input
            id="sinf"
            placeholder="Sinfingizni kiriting"
            className="focus:border-emerald-500 focus:ring-emerald-500"
            {...form.register("sinf")}
          />
        </Field>

        <Field>
          <Input
            id="password"
            type="password"
            placeholder="Parolni kiriting"
            className="focus:border-emerald-500 focus:ring-emerald-500"
            {...form.register("password")}
          />
        </Field>

        <Field>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Parolingizni qayta kiriting"
            className="focus:border-emerald-500 focus:ring-emerald-500"
            {...form.register("confirmPassword")}
          />
        </Field>

        <Field>
          <Button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 text-white"
          >
            Register
          </Button>
        </Field>

        <Field>
          <FieldDescription className="text-center text-emerald-600">
            Allaqachon hisobingiz bormi?{" "}
            <Link
              to="/login"
              className="underline underline-offset-4 hover:text-emerald-700"
            >
              Sign In
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
