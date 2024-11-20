import useDeleteTodo from '../hooks/useDeleteTodo';
import useLogicOperationForm from '../hooks/useLogicOperationForm';
import useTodoList from '../hooks/useTodoList';
import useToggleTodo from '../hooks/useToggleTodo';

const ToDoListLogicOperations = () => {

  const { formSection } = useLogicOperationForm();
  const { handleDelete, getIsPending } = useDeleteTodo();
  const { toggleTodo } = useToggleTodo()

  const { data: todoItems, isLoading, error } = useTodoList();

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

    {formSection()}
    <div className={`flex flex-col gap-4`}>
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