export interface IPomodoroRoundRepsonse {
	id: string
	createdAt?: string
	updatedAt?: string
	isCompleted?: string
	totalSeconds: string
}

export interface IPomodoroSessionRepsonse {
	id: string
	createdAt?: string
	updatedAt?: string
	isCompleted?: string
	totalSeconds: string
	rounds?: IPomodoroRoundRepsonse[]
}

export type TypePomodoroSessionFormState = Partial<
	Omit<IPomodoroSessionRepsonse, 'id' | 'createdAt' | 'updatedAt'>
>

export type TypePomodoroRoundFormState = Partial<
	Omit<IPomodoroRoundRepsonse, 'id' | 'createdAt' | 'updatedAt'>
>
