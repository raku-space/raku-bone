import { Hono } from "hono"

import { cors } from "hono/cors"
import { csrf } from "hono/csrf"
import { timing } from "hono/timing"
import { logger } from "hono/logger"
import { prettyJSON } from "hono/pretty-json"
import { secureHeaders } from "hono/secure-headers"

const app = new Hono()

app.use("*", cors(), csrf(), secureHeaders(), timing(), logger(), prettyJSON())

app.get("/", (c) => {
  return c.text("Hello Hono!")
})

export default app
