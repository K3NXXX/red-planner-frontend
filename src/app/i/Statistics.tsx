"use client";

import Loader from "@/components/ui/Loader";

import { useProfile } from "@/hooks/useProfile";

import styles from "./Statistics.module.scss";

export function Statistics() {
  const { data, isLoading } = useProfile();
  return isLoading ? (
    <Loader />
  ) : (
    <div className={styles.item}>
      {data?.statistics.length ? (
        data.statistics.map((statistic) => (
          <div
            className="bg-border/5  rounded p-layout text-center
					hover:-translate-y-3 transition-transform duration-500 "
            key={statistic.label}
          >
            <div className="text-1">{statistic.label}</div>
            <div className="text-3xl font-semibold">{statistic.value}</div>
          </div>
        ))
      ) : (
        <div>Statistics not found</div>
      )}
    </div>
  );
}
