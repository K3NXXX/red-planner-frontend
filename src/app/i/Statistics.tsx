"use client";

import Loader from "@/components/ui/Loader";

import { useProfile } from "@/hooks/useProfile";

export function Statistics() {
  const { data, isLoading } = useProfile();
  return isLoading ? (
    <Loader />
  ) : (
    <div className="grid grid-cols-4 gap-4 mt-7 justify-center">
      {data?.statistics.length ? (
        data.statistics.map((statistic) => (
          <div
            className="bg-border/5 max-w-md rounded p-layout text-center
					hover:-translate-y-3 transition-transform duration-500"
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
