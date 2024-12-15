"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

//==> Components <==//
import { UserValidator } from "@/schema/validator/user.validator";
import { InputContainer } from "@/components/input-container";
import { InputLabel } from "@/components/input-label";
import { InputField } from "@/components/input-field";
import { ChevronLeft } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { registerUser } from "@/actions/user.action";
import { useState } from "react";

export default function RegisterPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof UserValidator.REGISTER_USER>>({
    resolver: zodResolver(UserValidator.REGISTER_USER),
    mode: "onChange",
    criteriaMode: "all",
  });

  const onSubmit = async (
    data: z.infer<typeof UserValidator.REGISTER_USER>
  ) => {
    try {
      const response = await registerUser(data);

      if (response?.status === "error") {
        setError(response.message);
      } else {
        const redirect = searchParams.get("callbackUrl");

        if (redirect) {
          router.push(redirect);
        } else {
          router.push("/");
        }
      }
    } catch (error) {
      throw error;
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
          Daftarkan akun Anda!
        </h1>
        <p className="text-sm text-neutral-40">
          Isi data yang diperlukan dan bergabunglah dengan komunitas kami dalam
          beberapa langkah mudah!
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {error && (
          <div
            role="alert"
            className="mb-5 font-semibold text-white alert bg-primary-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 stroke-current shrink-0"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error}</span>
          </div>
        )}

        <InputContainer>
          <InputLabel>Nama</InputLabel>
          <InputField
            type="text"
            placeholder="Masukkan nama Anda"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-sm text-red-500">
              {errors.name.message && errors.name.message.toString()}
            </p>
          )}
        </InputContainer>

        <InputContainer>
          <InputLabel>No. Hp</InputLabel>
          <InputField
            type="tel"
            placeholder="Masukkan No. Hp Anda"
            inputMode="numeric"
            maxLength={13}
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
            }}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-sm text-red-500">
              {errors.phone.message && errors.phone.message.toString()}
            </p>
          )}
        </InputContainer>

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
            placeholder="Buat kata sandi"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-sm text-red-500">
              {errors.password.message && errors.password.message.toString()}
            </p>
          )}
        </InputContainer>

        <InputContainer>
          <InputLabel>Konfirmasi Kata Sandi</InputLabel>
          <InputField
            type="password"
            placeholder="Konfirmasi kata sandi"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-sm text-red-500">
              {errors.confirmPassword.message &&
                errors.confirmPassword.message.toString()}
            </p>
          )}
        </InputContainer>

        <button
          type="submit"
          className={`w-full p-3 mt-3 rounded-full ${
            Object.keys(errors).length > 0
              ? "bg-neutral-10 text-neutral-40"
              : "bg-primary-base text-white"
          }`}
        >
          Register
        </button>

        <div className="flex justify-center mt-5">
          <p className="text-sm text-neutral-40">
            Sudah punya akun?{" "}
            <span
              onClick={() => router.push("/auth/sign-in")}
              className="cursor-pointer text-primary-base"
            >
              Masuk
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
