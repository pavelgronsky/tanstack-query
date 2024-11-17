import { TodoDto } from './types';

const BASE_URL = "http://localhost:3000"

export const todoListApi = {
  getTodoList: ({ signal }: { signal: AbortSignal }) => {
    return fetch(`${BASE_URL}/tasks`, {
      signal
    }).then(res => res.json() as Promise<TodoDto[]>);
  }
}