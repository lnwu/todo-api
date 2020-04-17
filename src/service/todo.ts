import { add, getList } from "../repo/todo"

export const getTodoList = async () => {
  return await getList()
}

export const addTodo = async () => {
  return await add({ title: "title" })
}
