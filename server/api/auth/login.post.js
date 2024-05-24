import { getUserByUsername } from "../../db/users";
import bcrypt from "bcrypt";
import { sendError, readBody, createError, defineEventHandler } from "h3";
import { userTransformer } from "../../transformers/user";
import { generateTokens, sendRefreshToken } from "../../utils/jwt";
import { createRefreshToken } from "../../db/refreshTokens";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password } = body;

  if (!username || !password) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "All fields are required" })
    );
  }

  const user = await getUserByUsername(username);

  if (!user) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "User not found" })
    );
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);
  if (!passwordMatch) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid username or password",
      })
    );
  }

  const { accessToken, refreshToken } = await generateTokens(user.id);

  await createRefreshToken({
    token: refreshToken,
    userId: user.id,
  });

  sendRefreshToken(event, refreshToken);

  return {
    access_Token: accessToken,
    user: userTransformer(user),
  };
});
