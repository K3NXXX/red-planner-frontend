"use client";

import { SubmitHandler, useForm } from "react-hook-form"

import { Button } from "@/components/ui/buttons/Button"
import { Field } from "@/components/ui/fileds/Fields"

import { TypeUserForm } from "@/types/auth.types"

import { useInitialData } from "./useInitialData"
import { useUpdateSettings } from "./useUpdateSettings"

export function Settings() {
  const { register, handleSubmit, reset } = useForm<TypeUserForm>({
    mode: "onChange",
  });
  useInitialData(reset);
  const { isPending, mutate } = useUpdateSettings();

  const onSubmit: SubmitHandler<TypeUserForm> = (data) => {
    const { password, ...rest } = data;
    mutate({
      ...rest,
      password: password || undefined,
    });
  };
  return (
    <div>
      <form className="w-2/4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <Field
              id="name"
              label="Name"
              placeholder="Enter Name"
              type="text"
              extra="mb-6"
              {...register("name", {
                required: "Name is required",
              })}
            />

            <Field
              id="email"
              label="Email"
              placeholder="Enter email"
              type="email"
              extra="mb-4"
              {...register("email", {
                required: "Email is required",
              })}
            />

            <Field
              id="password"
              label="Password"
              placeholder="Enter password"
              type="password"
              extra="mb-6"
              {...register("password")}
            />
          </div>
          <div>
            <Field
              id="workInterval"
              label="Work interval (min.): "
              placeholder="Enter work interval (min.): "
              extra="mb-6"
              isNumber
              {...register("workInterval", {
                valueAsNumber: true,
              })}
            />
            <Field
              id="intervalsCount"
              label="Intervals count (max 10): "
              placeholder="Enter intervals count (max 10): "
              extra="mb-4"
              isNumber
              {...register("intervalsCount", {
                valueAsNumber: true,
              })}
            />

            <Field
              id="breakInterval"
              label="Break interval (min.): "
              placeholder="Enter break interval (min.): "
              extra="mb-6"
              type="text"
              isNumber
              {...register("breakInterval", {
                valueAsNumber: true,
              })}
            />
          </div>
        </div>
        <Button type="submit" disabled={isPending}>
          Save
        </Button>
      </form>
    </div>
  );
}
