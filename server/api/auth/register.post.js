import { sendError } from "h3";
import { createUser } from "../../db/users.js";
import { userTransformer } from "../../transformers/user.js";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, email, password, repeatPassword, name } = body;

  if (!username || !email || !password || !repeatPassword || !name) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "All fields are required" })
    );
  }

  if (password !== repeatPassword) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Passwords do not match" })
    );
  }

  const userData = {
    username,
    email,
    password,
    name,
    profileImage: "https://i.pravatar.cc/150?u=example.com",
  };
  const user = await createUser(userData);
  return {
    body: userTransformer(user),
  };
});
