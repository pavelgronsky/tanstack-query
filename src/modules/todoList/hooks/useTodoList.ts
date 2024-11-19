import { useSuspenseQuery } from '@tanstack/react-query';
import { todoListApi } from '../api/api';

const useTodoList = () => {
  const { data, error, isLoading } = useSuspenseQuery({
    ...todoListApi.getTodoList(),
  })

  return {
    data,
    error,
    isLoading,
  }
}

export default useTodoList;