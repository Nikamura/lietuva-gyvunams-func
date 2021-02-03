import { NowRequest, NowResponse } from "@vercel/node";
import { Telegraf } from "telegraf";

const bot = new Telegraf(process.env.LIETUVA_GYVUNAMS_TELEGRAM_BOT_TOKEN);

export default (request: NowRequest, response: NowResponse) => {
  const { query, body, headers } = request;
  bot.telegram.sendMessage(
    process.env.LIETUVA_GYVUNAMS_TELEGRAM_CHAT_ID,
    JSON.stringify({ query, body, headers })
  );
  response.status(200).send(`Thanks! Come again!`);
};
