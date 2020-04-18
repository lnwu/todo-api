import { add, getList } from "../repository/todo"
import { ToBeCreateTodo } from "../model/todo"

export const addTodo = async (newTodo: ToBeCreateTodo) => {
  return await add(newTodo)
}

export const getTodoList = async () => {
  return [{ title: "title-test" }]
}
