import { Telegraf } from 'telegraf'

const bot = new Telegraf(process.env.BOT_TOOKEN)

bot.command('quit', (ctx) => {
    //Explicit usage
    ctx.telegram.leaveChat(ctx.message.chat.id)

    //using context shortcut
    ctx.leaveChat()
})

bot.on('text', (ctx) => {
    //Explicit usage
    ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`)

    // Using context shortcut
    ctx.reply(`Hello ${ctx.state.role}`)
})

bot.on('inline_query', (ctx) => {
    const results = []
    //explict usage
    ctx.telegram.answerInlineQuery(result)
})

bot.launch()

//Enable graceful stop

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

