import { PaginatedResult, TodoDto } from './types';

const BASE_URL = "http://localhost:3000"

export const todoListApi = {
  getTodoList: (
    { page }: { page: number },
    { signal }: { signal: AbortSignal },
  ) => {
    return fetch(`${BASE_URL}/tasks?_page=${page}&_per_page=10`, {
      signal
    }).then(res => res.json() as Promise<PaginatedResult<TodoDto>>);
  }
}