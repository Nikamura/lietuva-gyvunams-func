import { NowRequest, NowResponse } from "@vercel/node";
import { Telegraf } from "telegraf";

const BOT_TOKEN = process.env.LIETUVA_GYVUNAMS_TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.LIETUVA_GYVUNAMS_TELEGRAM_CHAT_ID;

if (!BOT_TOKEN || !CHAT_ID) {
  throw new Error(
    "Missing LIETUVA_GYVUNAMS_TELEGRAM_BOT_TOKEN and/or LIETUVA_GYVUNAMS_TELEGRAM_CHAT_ID env variables."
  );
}

const bot = new Telegraf(BOT_TOKEN);

export default async (request: NowRequest, response: NowResponse) => {
  const { query, body, headers } = request;
  await bot.telegram.sendMessage(
    CHAT_ID,
    JSON.stringify({ query, body, headers })
  );
  response.status(200).send(`Thanks! Come again!`);
};
