import { Dispatch, SetStateAction } from "react";

import { ITaskRepsonse } from "@/types/task.types";

import styles from "./ListView.module.scss";

interface IListAddRowInput {
  filterDate?: string;
  setItems: Dispatch<SetStateAction<ITaskRepsonse[] | undefined>>;
}

export function ListAddRowInput({ setItems, filterDate }: IListAddRowInput) {
  const addRow = () => {
    setItems((prev) => {
      if (!prev) return;

      return [
        ...prev,
        {
          id: "",
          name: "",
          isCompleted: false,
          createdAt: filterDate,
        },
      ];
    });
  };

  return (
    <div className={styles.addRow}>
      <button onClick={addRow} className="italic opacity-40 text-sm">
        Add task...
      </button>
    </div>
  );
}
