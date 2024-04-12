"use client";

import { FormProvider, useForm } from "react-hook-form";

import type { TypeTimeBlockFormState } from "@/types/time-blocks";

import styles from "./TimeBlocking.module.scss";
import { TimeBlockingList } from "./TimeBlockingList";
import { TimeBlockingForm } from "./form/TimeBlockingForm";

export function TimeBlocking() {
  const methods = useForm<TypeTimeBlockFormState>();

  return (
    <FormProvider {...methods}>
      <div className={styles.root}>
        <TimeBlockingList />
        <TimeBlockingForm />
      </div>
    </FormProvider>
  );
}
