import { OutputTodosListDTO } from "../../dtos/output-todo-list-dto";

export async function fetchAllTodos(): Promise<OutputTodosListDTO[]> {
  return await fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
}