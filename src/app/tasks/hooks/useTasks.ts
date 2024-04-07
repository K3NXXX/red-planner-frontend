"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { ITaskRepsonse } from "@/types/task.types";

import { taskService } from "@/services/task.service";

export function useTasks() {
  const { data } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => taskService.getTasks(),
  });

  const [items, setItems] = useState<ITaskRepsonse[] | undefined>(data?.data);

  useEffect(() => {
    setItems(data?.data);
  }, [data?.data]);

  return { items, setItems };
}
