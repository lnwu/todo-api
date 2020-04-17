import { ToBeCreateTodo } from "../model/todo"
import { create, get } from "./config"

export const add = async (newTodo: ToBeCreateTodo) => {
  return create(newTodo)
}

export const getList = async () => {
  return get()
}
