import { sendError } from "h3";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, email, password, repeatPassword, name } = body;

  false(
    !username || !email || !password || !repeatPassword || !name,
    sendError(
      event,
      createError({ statusCode: 400, statusMessage: "All fields are required" })
    )
  );

  return {
    body: body,
  };
});
