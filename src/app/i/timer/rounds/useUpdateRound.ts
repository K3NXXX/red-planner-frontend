import { useMutation, useQueryClient } from "@tanstack/react-query";

import { TypePomodoroRoundState } from "@/types/pomodoro.types";

import { pomodoroService } from "@/services/pomodoro.service";

interface IUseUpdateRound {
  id: string;
  data: TypePomodoroRoundState;
}
export function useUpdateRound() {
  const queryClient = useQueryClient();
  const { mutate: updateRound, isPending: isUpdateRoundPending } = useMutation({
    mutationKey: ["update round"],
    mutationFn: ({ id, data }: IUseUpdateRound) =>
      pomodoroService.updateRound(id, data),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["get today session"] });
    },
  });
  return { updateRound, isUpdateRoundPending };
}
