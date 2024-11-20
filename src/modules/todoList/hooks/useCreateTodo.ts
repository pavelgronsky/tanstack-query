import { useMutation, useQueryClient } from '@tanstack/react-query';
import { nanoid } from 'nanoid';

import { todoListApi } from '../api/api';
import { TFormValues } from '../types';
import { FormikState } from 'formik';

const useCreateTodo = () => {
  const queryClient = useQueryClient();

  const createTodoMutation = useMutation({
    mutationFn: todoListApi.createTodo,
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: [todoListApi.baseKey],
      });
    }
  })

  const handleCreate = (values: TFormValues, resetForm: (nextState?: Partial<FormikState<any>>) => void) => {
    createTodoMutation.mutate({
      id: nanoid(),
      done: false,
      text: values.text,
      userId: '1',
      createdAt: new Date().toISOString(),
    })
    resetForm();
  }

  return {
    handleCreate,
    isPending: createTodoMutation.isPending,
  }
}

export default useCreateTodo;