import { useQuery } from '@tanstack/react-query'
import { todoListApi } from './api'

const TodoList = () => {
  const { data, error, isPending } = useQuery({
    queryKey: ['tasks', 'list'],
    queryFn: todoListApi.getTodoList,
  })

  if (isPending) {
    return <div>Loading</div>
  }

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>
  }

  return (<div className='p-5 mx-auto max-w-[1200px] mt-10'>
    <h1 className="text-3xl font-bold underline my-5">
      Hello Tanstack!
    </h1>

    <div className='flex flex-col gap-4'>
      {data.map(todo => <div className='border border-slate-300 rounded p-3' key={todo.id}>{todo.text}</div>)}
    </div>
  </div>
  )
}

export default TodoList;