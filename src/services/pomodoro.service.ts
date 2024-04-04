import {
  IPomodoroSessionRepsonse,
  TypePomodoroRoundFormState,
} from "@/types/pomodoro.types";

import { axiosWithAuth } from "@/api/intercaptors";

class PomodooroService {
  private BASE_URL = "/user/timer";

  async getTodaySession() {
    const response = await axiosWithAuth.get<IPomodoroSessionRepsonse>(
      `${this.BASE_URL}/today`,
    );
    return response;
  }

  async createSession() {
    const response = await axiosWithAuth.post<IPomodoroSessionRepsonse>(
      this.BASE_URL,
    );
    return response;
  }

  async updateSession(id: string, data: TypePomodoroRoundFormState) {
    const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data);
    return response;
  }

  async deleteSession(id: string) {
    const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`);
    return response;
  }
}

export const pomodoroService = new PomodooroService();
