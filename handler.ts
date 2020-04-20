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
  const defaultResponse = {
    statusCode: 404,
    headers,
    body: "Not Found",
  }

  initDB()

  switch (path) {
    case "/todos": {
      if (method === "POST") {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(await addTodo(body)),
        }
      }

      if (method === "GET") {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(await getTodoList()),
        }
      }

      return defaultResponse
    }

    case "/todo": {
      return defaultResponse
    }

    default: {
      return defaultResponse
    }
  }
}
