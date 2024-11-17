import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../shared/api/query-client'
import TodoList from '../modules/todoList/todoList'

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoList />
    </QueryClientProvider>
  )
}

export default App
