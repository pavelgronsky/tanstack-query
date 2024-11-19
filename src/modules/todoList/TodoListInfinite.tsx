import { useInfiniteQuery } from '@tanstack/react-query'

import { todoListApi } from './api'
import { useIntersection } from './hooks/useIntersection';

const TodoListInfinite = () => {
  const {
    data: todoItems,
    error,
    isLoading,
    isPlaceholderData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    ...todoListApi.getTodoListInfinityQueryOptions(),
  })

  const cursorRef = useIntersection(() => {
    fetchNextPage()
  })

  if (isLoading) {
    return <div>Loading</div>
  }

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>
  }

  return (<div className='p-5'>
    <h1 className="text-2xl font-bold underline my-5">
      Hello Tanstack Infinite Query
    </h1>

    <div className={`flex flex-col gap-4 ${isPlaceholderData ? ' opacity-50' : ''}`}>
      {todoItems?.map(todo => <div className='border border-slate-300 rounded p-3' key={todo.id}>
        {todo.text}
      </div>)}
    </div>
    <div className='flex gap-2 mt-4' ref={cursorRef}>
      {!hasNextPage && <div>Has no data to load</div>}
      {isFetchingNextPage && <div>Loading...</div>}
    </div>
  </div>
  )
}

export default TodoListInfinite;