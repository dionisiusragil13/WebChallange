import "dotenv/config";

export const ENV = {
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  PORT: process.env.PORT,
  ARCJET_KEY:process.env.ARCJET_KEY,
  ARCJET_ENV:process.env.ARCJET_ENV,
};
