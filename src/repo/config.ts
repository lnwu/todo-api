import AV from "leanengine"
import { ToBeCreateTodo } from "../model/todo"

console.log("process.env.SERVER_URL", process.env.SERVER_URL)

AV.init({
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  serverURL: process.env.SERVER_URL || "",
  appId: process.env.LEANCLOUD_APP_ID || "",
  appKey: process.env.LEANCLOUD_APP_KEY || "",
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || "",
})

const Query = new AV.Query("Todo")
const Todo = AV.Object.extend("Todo")

export const create = async (dto: ToBeCreateTodo) => {
  const todo = new Todo()
  todo.set("title", dto.title)

  const doc = await todo.save()
  return doc.toJSON()
}

export const get = async () => {
  const docs = await Query.find()

  return docs.map((doc) => doc.toJSON())
}
