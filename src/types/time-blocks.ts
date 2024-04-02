export interface ITimeBlockResponse {
	id: string
	createdAt?: string
	updatedAt?: string
	name: string
	color?: string
	duration: number
	order: number
}

export type TypeTimeBlockFormState = Partial<
	Omit<ITimeBlockResponse, 'createdAt' | 'updatedAt'>
>
