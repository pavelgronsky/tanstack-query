export type TodoDto = {
  id: string,
  text: string,
  done: boolean,
  userId: string,
  createdAt: string,
}

export type PaginatedResult<T> = {
  data: T[],
  first: number,
  items: number,
  last: number,
  next: number | null,
  pages: number,
  prev: number | null,
}

export type TFormValues = {
  text: string,
}