import useCreateTodo from '../hooks/useCreateTodo';
import useDeleteTodo from '../hooks/useDeleteTodo';
import useTodoList from '../hooks/useTodoList';
import useToggleTodo from '../hooks/useToggleTodo';

const ToDoListLogicOperations = () => {

  const { handleCreate, isPending } = useCreateTodo();
  const { handleDelete, getIsPending } = useDeleteTodo();
  const { toggleTodo } = useToggleTodo()

  const { data: todoItems, isLoading, error, isPlaceholderData } = useTodoList();

  if (isLoading) {
    return <div>Loading</div>
  }

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>
  }

  return (<div className='p-5'>
    <h1 className="text-2xl font-bold underline my-5">
      Add/remove TodoList Item
    </h1>

    <form className='flex gap-2 mb-5' onSubmit={handleCreate}>
      <input className='rounded p-2 border border-teal-500' name="text" type="text" />
      <button disabled={isPending} className='rounded p-2 border border-teal-500 disabled:opacity-50' >Create</button>
    </form>

    <div className={`flex flex-col gap-4 ${isPlaceholderData ? ' opacity-50' : ''}`}>
      {todoItems?.map(todo => <div className='flex justify-between border border-slate-300 rounded p-3' key={todo.id}>
        <input type='checkbox' checked={todo.done} onChange={() => toggleTodo(todo.id, todo.done)} />
        {todo.text}

        <button
          disabled={getIsPending(todo.id)}
          className='text-rose-500 font-bold disabled:text-rose-300'
          onClick={() => handleDelete(todo.id)}
        >
          Remove
        </button>
      </div>)}
    </div>
  </div>
  )
}

export default ToDoListLogicOperations;