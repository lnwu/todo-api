import { ToBeCreateTodo } from "../model/todo"

export const add = async ({ title }: ToBeCreateTodo) => {
  return { title }
}

export const getList = async () => {
  return []
}
