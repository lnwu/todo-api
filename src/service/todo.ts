import { add, getList } from "../repo/todo"
import { ToBeCreateTodo } from "../model/todo"

export const addTodo = async (newTodo: ToBeCreateTodo) => {
  return await add(newTodo)
}

export const getTodoList = async () => {
  return await getList()
}
