import { useMutation, useQueryClient } from '@tanstack/react-query';

import { todoListApi } from '../api';

const useToggleTodo = () => {
  const queryClient = useQueryClient();

  const updateTodoMutation = useMutation({
    mutationFn: todoListApi.updateTodo,
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({
        queryKey: [todoListApi.baseKey]
      })

      const previousTodos = queryClient.getQueryData(
        todoListApi.getTodoList().queryKey,
        //Add all params if needed(filter, pagination etc.)
      )

      // Optimistically update to the new value
      queryClient.setQueryData(
        todoListApi.getTodoList().queryKey,
        old => old?.map(todo =>
          todo.id === newTodo.id ? { ...todo, ...newTodo } : todo),
      )

      return { previousTodos }
    },
    onError: (_, __, context) => {
      if (context) {
        queryClient.setQueryData(
          todoListApi.getTodoList().queryKey,
          context.previousTodos,
        )
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [todoListApi.baseKey]
      })
    },
  })

  const toggleTodo = (id: string, done: boolean) => {
    updateTodoMutation.mutate({
      id,
      done: !done,
    })
  }

  return {
    toggleTodo,
  }
}

export default useToggleTodo;