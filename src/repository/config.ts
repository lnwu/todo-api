import AV from "leanengine"
import { ToBeCreateTodo } from "../model/todo"

const Query = new AV.Query("Todo")
const Todo = AV.Object.extend("Todo")

export const initDB = () => {
  AV.init({
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    serverURL: process.env.SERVER_URL || "",
    appId: process.env.LEANCLOUD_APP_ID || "",
    appKey: process.env.LEANCLOUD_APP_KEY || "",
    masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || "",
  })
}

export const create = async (dto: ToBeCreateTodo) => {
  const todo = new Todo()
  todo.set("title", dto.title)

  const doc = await todo.save()
  return doc.toJSON()
}

export const get = async () => {
  console.log("START GET")
  const docs = await Query.find()
  console.log("END GET")

  return docs.map((doc) => doc.toJSON())
}
