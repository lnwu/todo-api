import { db } from "./config"
import { ToBeCreateTodo } from "../model/todo"

const ref = db.ref("/todo")

export const add = async ({ title }: ToBeCreateTodo) => {
  return ref.push({
    title
  })
}

export const getList = async () => {
  const snap = await ref.once("value")
  console.log("snap", snap.val())
  return snap
}
