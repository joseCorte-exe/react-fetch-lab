import { useFetchAllTodos } from "../hooks/useFetchAllTodos"
import { fetchAllTodos } from "../services/fetch/fetchAllTodos"

export function HomeTemplate() {
  const data = useFetchAllTodos(fetchAllTodos)

  if (data.isLoading) {
    return <h2>Loading...</h2>
  } else {
    console.log(data.data)
  }

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}