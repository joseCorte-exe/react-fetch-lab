import { OutputTodosListDTO } from "../../dtos/output-todo-list-dto"
import { supabase } from "../../supabase/client"

export async function fetchAllTodos(): Promise<OutputTodosListDTO[]> {
  const { data, error } = await supabase.from('todos').select()
  if (error) {
    throw new Error(error.message)
  }
  return data
}