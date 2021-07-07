import { Telegraf } from "telegraf";
import { config as configureEnv } from "dotenv";
import { msgModel } from "../backend/Models/userModel";
const mongoose = require("mongoose");
configureEnv({ path: ".env" });

if (!process.env.MONGODB_URL) {
  throw new Error("You Must Have A MONGODB_URL In Your .env file ");
}

const bot = new Telegraf(process.env.BOT_TOKEN);

const main = () => {
  console.log("Connecting to MongoDB ...");
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((result) => {
      console.log("Connected to MongoDB...)");
    })
    .catch((err) => {
      console.log("Mongo Error:", err);
    });

  bot.command("start", (ctx) => {
    const msg = `Hello ${ctx.from.username}, to start tracking tokens enter the token address eg.0x`;
    return ctx.reply(msg);
  });

  bot.on("text", (ctx) => {
    let text = ctx.message.text;
    console.log("User text:", text);
    // validate
    // check if token address is valid

    // save if valid
    ctx.reply(`Saving the  ${text} in the db ...`)
    new msgModel({
      token: text,
    }).save().then((doc) => {
        console.log('doc:', doc);
        ctx.reply(`Token ${text} has been successfully saved in the database`)
    }).catch((error) => {
        console.log('Error:', error);
    });

    return ctx.reply(`User messages was ${text}`);
  });


  bot.launch();
};

main();
