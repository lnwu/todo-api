import {
  APIGatewayProxyEvent,
  Handler,
  APIGatewayProxyResult,
} from "aws-lambda"
import { getTodoList, addTodo } from "./src/service/todo"
import { initDB } from "./src/repository/config"

export const root: Handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  console.log("REQUEST ID: ", event.requestContext.requestId)
  const path = event.path as "/todos" | "/todo"
  const method = event.httpMethod as "GET" | "POST" | "DELETE"
  const body = JSON.parse(event.body || "{}")
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  }

  initDB()

  switch (path) {
    case "/todos": {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(await getTodoList()),
      }
    }

    case "/todo": {
      if (method === "POST") {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(await addTodo(body)),
        }
      }
    }

    // eslint-disable-next-line no-fallthrough
    default: {
      return {
        statusCode: 404,
        headers,
        body: "Not Found",
      }
    }
  }
}
