import jwt from "jsonwebtoken";

const generateAccessToken = (userId) => {
  const config = useRuntimeConfig();
  return jwt.sign({ userId: userId.id }, config.jwtAccessToken, {
    expiresIn: "15m",
  });
};

const generateRefreshToken = (userId) => {
  const config = useRuntimeConfig();
  return jwt.sign({ userId: userId.id }, config.jwtRefreshToken, {
    expiresIn: "7d",
  });
};

export const generateTokens = async (userId) => {
  const accessToken = generateAccessToken(userId);
  const refreshToken = generateRefreshToken(userId);
  return { accessToken, refreshToken };
};

export const sendRefreshToken = (event, refreshToken) => {
  setCookie(event, "refresh_token", refreshToken, {
    httpOnly: true,
    sameSite: true,
  });
};
