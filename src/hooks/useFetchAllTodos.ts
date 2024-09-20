import { useQuery } from "@tanstack/react-query"
import { OutputTodosListDTO } from "../dtos/output-todo-list-dto"

export function useFetchAllTodos(fetch: () => Promise<OutputTodosListDTO[]>) {
  const query = useQuery({ queryKey: ['todos'], queryFn: fetch })

  return query
}