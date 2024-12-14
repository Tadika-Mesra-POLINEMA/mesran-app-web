"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

//==> Components <==//
import { InputContainer } from "@/components/input-container";
import { InputLabel } from "@/components/input-label";
import { InputField } from "@/components/input-field";
import { ChevronLeft } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { AuthValidator } from "@/schema/validator/auth.validator";
import { loginUser } from "@/actions/auth.action";
import Swal from "sweetalert2";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof AuthValidator.LOGIN_SCHEMA>>({
    resolver: zodResolver(AuthValidator.LOGIN_SCHEMA),
    mode: "onChange",
    criteriaMode: "all",
  });

  const onSubmit = async (data: z.infer<typeof AuthValidator.LOGIN_SCHEMA>) => {
    try {
      const response = await loginUser(data);

      if (response.status === "success") {
        router.push(
          `/auth/verify-sign-in?callbackUrl=${searchParams.get("callbackUrl")}`
        );
      } else {
        Swal.fire({
          title: "Login Gagal",
          text: "Gagal login, silahkan coba lagi",
          icon: "error",
          confirmButtonColor: "#FE4F34",
          customClass: {
            confirmButton: "px-8 py-2 rounded-full",
          },
        });
      }
    } catch (error) {
      console.error("Submit error:", error);
    }
  };

  const handleNavigateRegister = () => {
    const redirect = searchParams.get("callbackUrl");

    if (redirect) {
      router.push(`/auth/register?callbackUrl=${redirect}`);
    } else {
      router.push("/auth/register");
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full min-h-[100dvh] p-12 mx-auto lg:w-2/6 md:w-1/2">
      <div className="flex flex-col gap-1">
        <div
          onClick={() => {
            router.back();
          }}
          className="flex items-center justify-center w-10 h-10 p-1 mb-5 text-center transition-all border-2 rounded-full border-neutral-20 hover:bg-neutral-20"
        >
          <ChevronLeft />
        </div>

        <h1 className="text-xl font-bold text-neutral-90">
          Masuk ke akun Anda!
        </h1>
        <p className="text-sm text-neutral-40">
          Isi informasi yang diperlukan, dan Anda akan siap untuk memulai dalam
          hitungan menit!
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <InputLabel>Email</InputLabel>
          <InputField
            type="email"
            placeholder="Masukkan email Anda"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-red-500">
              {errors.email.message && errors.email.message.toString()}
            </p>
          )}
        </InputContainer>

        <InputContainer>
          <InputLabel>Password</InputLabel>
          <InputField
            type="password"
            placeholder="Masukkan kata sandi Anda"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-sm text-red-500">
              {errors.password.message && errors.password.message.toString()}
            </p>
          )}
        </InputContainer>
        <button
          type="submit"
          className={`w-full p-3 mt-3 rounded-full font-semibold ${
            Object.keys(errors).length > 0
              ? "bg-neutral-10 text-neutral-40"
              : "bg-primary-base text-white"
          }`}
        >
          Masuk
        </button>

        <div className="flex justify-center mt-5">
          <p className="text-sm text-neutral-40">
            Belum punya akun?{" "}
            <span
              onClick={handleNavigateRegister}
              className="cursor-pointer text-primary-base"
            >
              Daftar
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
