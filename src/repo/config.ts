import admin from "firebase-admin"
import globalTunnel from "global-tunnel-ng"

// eslint-disable-next-line @typescript-eslint/no-var-requires
const service = require(process.env.GOOGLE_APPLICATION_CREDENTIALS)

globalTunnel.initialize({
  host: "127.0.0.1",
  port: 12639
})

console.log("service", service)

admin.initializeApp({
  credential: admin.credential.cert(service),
  databaseURL: "https://todo-api-7e7eb.firebaseio.com"
})

export const db = admin.database()
