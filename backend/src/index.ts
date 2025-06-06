import { Hono } from "hono";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blogs";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET : string; 
  };
  Variables: {
    userId : string;
  }
}>();

app.route("/api/v1/user/", userRouter)
app.route("/api/v1/blog/", blogRouter);


export default app;
