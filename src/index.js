require("dotenv").config()
const { Client } = require ("discord.js")

const client = new Client({intents: []})

client.once("ready", () => {
    console.log(`Ready! Logged in as ${client.user.tag}! I am on ${client.guilds.cache.size} guild(s)!`)
    client.user.setActivity({name: "mit dem Code", type: "PLAYING"})
})


client.login(process.env.DISCORD_BOT_TOKEN)


bot.on('message', message => {
    // ping command without a prefix (exact match)
    if (message.content === 'ping') {
        const delay = Date.now() - message.createdAt
        message.reply(`**pong** *(delay: ${delay}ms)*`)
        return
    }
})    
