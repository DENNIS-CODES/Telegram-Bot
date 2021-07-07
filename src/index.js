import { Telegraf } from 'telegraf'
import {config as configureEnv}  from 'dotenv'
import {msgModel} from '../backend/Models/userModel'

configureEnv({path: '.env'})
const bot = new Telegraf(process.env.BOT_TOKEN)
const sendMessage = async (ctx, message) => {
    return ctx.reply(message)
}

bot.command('start', (ctx) =>{
    const msg  = `Hello ${ctx.from.username}, to start tarcking tokens enter the token address eg.0x`;

    let newRecord = new msgModel({
        msg : msg
    })

    newRecord.save()

    return sendMessage(ctx, msg)
})


bot.launch()


//live:.cid.c797a5aedbb68f62