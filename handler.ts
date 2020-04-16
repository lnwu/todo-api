import {
  APIGatewayProxyEvent,
  Handler,
  APIGatewayProxyResult
} from "aws-lambda"
import { getTodoList, addTodo } from "./src/service/todo"

export const hello: Handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  console.log("REQUEST ID: ", event.requestContext.requestId)
  const path = event.path as "/todoList" | "/todo"
  const method = event.httpMethod as "GET" | "POST" | "DELETE"

  switch (path) {
    case "/todoList": {
      return {
        statusCode: 200,
        body: JSON.stringify(await getTodoList())
      }
    }

    case "/todo": {
      if (method === "POST") {
        return {
          statusCode: 200,
          body: JSON.stringify(await addTodo())
        }
      }
    }

    // eslint-disable-next-line no-fallthrough
    default: {
      return {
        statusCode: 404,
        body: "Not Found"
      }
    }
  }
}
