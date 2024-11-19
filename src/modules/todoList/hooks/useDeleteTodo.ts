import { useMutation, useQueryClient } from '@tanstack/react-query';

import { todoListApi } from '../api';

const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  const deleteTodoMutation = useMutation({
    mutationFn: todoListApi.deleteTodo,
    onSettled: async () => {
      queryClient.invalidateQueries({
        queryKey: [todoListApi.baseKey],
      });
    },
    onSuccess: async (_, deletedId) => {
      queryClient.setQueryData(
        todoListApi.getTodoList().queryKey,
        todoQuery => todoQuery?.filter(item => item.id !== deletedId))
    }
  })

  const handleDelete = (id: string) => deleteTodoMutation.mutate(id);

  return {
    handleDelete,
    getIsPending: (id: string) => deleteTodoMutation.isPending && deleteTodoMutation.variables === id,
  }
}

export default useDeleteTodo;