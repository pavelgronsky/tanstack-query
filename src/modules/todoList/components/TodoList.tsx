import { Tabs } from "flowbite-react";
import TodoListPagination from './TodoListPagination';
import TodoListInfinite from './TodoListInfinite';
import ToDoListLogicOperations from './ToDoListLogicOperations';

const TodoList = () => {
  return (
    <div className='p-5 mx-auto max-w-[800px] mt-10'>
      <Tabs aria-label="Default tabs" variant="default">
        <Tabs.Item active title="Todo list pagination">
          <TodoListPagination />
        </Tabs.Item>
        <Tabs.Item title="Todo list infinite Query">
          <TodoListInfinite />
        </Tabs.Item>
        <Tabs.Item title="Todo list add/remove item">
          < ToDoListLogicOperations />
        </Tabs.Item>
      </Tabs>
    </div>
  )
}

export default TodoList;