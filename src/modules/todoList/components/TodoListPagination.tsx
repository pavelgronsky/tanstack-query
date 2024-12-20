import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { todoListApi } from '../api/api'

const TodoListPagination = () => {
  const [page, setPage] = useState(1);

  const { data: todoItems, error, isLoading, isPlaceholderData } = useQuery({
    ...todoListApi.getTodoListQueryOptions({ page }),
  })

  if (isLoading) {
    return <div>Loading</div>
  }

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>
  }

  return (<div className='p-5'>
    <h1 className="text-2xl font-bold underline my-5">
      Hello Tanstack Pagination
    </h1>

    <div className={`flex flex-col gap-4 ${isPlaceholderData ? ' opacity-50' : ''}`}>
      {todoItems?.data.map(todo => <div className='border border-slate-300 rounded p-3' key={todo.id}>
        {todo.text}
      </div>)}
    </div>
    <div className='flex gap-2 mt-4'>
      <button onClick={() => setPage(p => Math.max(p - 1, 1))}
        className='p-3 rounded border border-teal-500'>
        Prev
      </button>
      <button onClick={() => setPage(p => Math.min(p + 1, todoItems?.pages ?? 1))}
        className='p-3 rounded border border-teal-500'>
        Next
      </button>
    </div>
  </div>
  )
}

export default TodoListPagination;