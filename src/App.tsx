import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import HomePage from './pages/home.page'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  )
}

export default App
