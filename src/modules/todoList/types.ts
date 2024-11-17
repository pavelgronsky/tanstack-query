export type TodoDto = {
  id: number,
  text: string,
  done: boolean,
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