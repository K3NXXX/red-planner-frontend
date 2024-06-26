"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/buttons/Button";
import { Field } from "@/components/ui/fileds/Fields";

import { IAuthForm } from "@/types/auth.types";

import { DASHBOARD_PAGES } from "@/config/pages-url.config";

import { authService } from "@/services/auth.service";

export function Auth() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IAuthForm>({
    mode: "onChange",
  });

  const [isLoginForm, setIsLoginForm] = useState(false);

  const { push } = useRouter();

  const { mutate } = useMutation({
    mutationKey: ["auth"],
    mutationFn: (data: IAuthForm) =>
      authService.main(isLoginForm ? "login" : "register", data),
    onSuccess() {
      toast.success("Successfully login!");
      reset();
      push(DASHBOARD_PAGES.HOME);
    },
  });

  const onSubmit: SubmitHandler<IAuthForm> = (data) => {
    mutate(data);
  };

  return (
    <div className="flex min-h-screen">
      <form
        className="m-auto sm:w-[500px] md:w-[500px] lg:w-[500px] xl:w-[500px] shadow bg-sidebar rounded-xl p-layout"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading title="Auth" />

        <Field
          id="email"
          label="Email: "
          placeholder="Enter email: "
          type="email"
          extra="mb-4"
          {...register("email", {
            required: "Email is required!",
          })}
        />

        <Field
          id="password"
          label="Password: "
          placeholder="Enter password: "
          type="password"
          {...register("password", {
            required: "Password is required!",
            minLength: {
              value: 6,
              message: "Password minimum 6 characters",
            },
          })}
          extra="mb-6"
        />
        {errors.password && (
          <p className="text-red-500 font-bold mb-2">
            {errors.password.message}
          </p>
        )}

        <div className="flex items-center gap-5 justify-center">
          <Button onClick={() => setIsLoginForm(true)}>Login</Button>
          <Button onClick={() => setIsLoginForm(false)}>Register</Button>
        </div>
      </form>
    </div>
  );
}
