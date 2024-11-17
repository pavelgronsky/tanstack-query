import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../shared/api/query-client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { TodoList } from '../modules/todoList'


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoList />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
