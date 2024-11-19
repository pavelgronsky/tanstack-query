import { infiniteQueryOptions, keepPreviousData, queryOptions } from '@tanstack/react-query';
import { PaginatedResult, TodoDto } from '../types';

import { jsonApiInstance } from '../../../shared/api/apiInstance';

export const todoListApi = {
  baseKey: 'tasks',
  getTodoList: () => {
    return queryOptions({
      queryKey: [todoListApi.baseKey, 'list'],
      queryFn: meta =>
        jsonApiInstance<TodoDto[]>(`/tasks?_sort=-createdAt`, {
          signal: meta.signal,
        }),
      placeholderData: keepPreviousData,
    })
  },

  getTodoListQueryOptions: ({ page }: { page: number }) => {
    return queryOptions({
      queryKey: [todoListApi.baseKey, 'listPagination', { page }],
      queryFn: meta =>
        jsonApiInstance<PaginatedResult<TodoDto>>(`/tasks?_page=${page}&_per_page=10`, {
          signal: meta.signal,
        }),
      placeholderData: keepPreviousData,
    })
  },

  getTodoListInfinityQueryOptions: () => {
    return infiniteQueryOptions({
      queryKey: [todoListApi.baseKey, 'listPagination'],
      queryFn: meta =>
        jsonApiInstance<PaginatedResult<TodoDto>>(`/tasks?_page=${meta.pageParam}&_per_page=10`, {
          signal: meta.signal,
        }),
      initialPageParam: 1,
      getNextPageParam: (result) => result.next,
      select: result => result.pages.flatMap(page => page.data),
    })
  },

  createTodo: (data: TodoDto) => {
    return jsonApiInstance<TodoDto>(`/tasks`, {
      method: 'POST',
      json: data,
    })
  },

  updateTodo: (data: Partial<TodoDto> & { id: string }) => {
    return jsonApiInstance<TodoDto>(`/tasks/${data.id}`, {
      method: 'PATCH',
      json: data,
    })
  },

  deleteTodo: (id: string) => {
    return jsonApiInstance<TodoDto>(`/tasks/${id}`, {
      method: 'DELETE',
    })
  },
}