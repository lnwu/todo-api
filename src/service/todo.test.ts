jest.mock("../repository/todo")

import { getTodoList } from "./todo"
import * as repository from "../repository/todo"

describe("todo", () => {
  describe("getTodoList", () => {
    test("should return value base on repository response", async () => {
      jest.spyOn(repository, "getList").mockResolvedValue([{ title: "title" }])

      expect(await getTodoList()).toEqual([{ title: "title" }])
    })
  })
})
