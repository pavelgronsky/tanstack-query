import { useQuery } from '@tanstack/react-query';
import { todoListApi } from '../api';

const useTodoList = () => {
  const { data, error, isLoading, isPlaceholderData } = useQuery({
    ...todoListApi.getTodoList(),
  })

  return {
    data,
    error,
    isLoading,
    isPlaceholderData,
  }
}

export default useTodoList;