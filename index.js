const config = require('./config.js');
const Discord = require('discord.js');
const bot = new Discord.Client();
const diceGame = require('./dicegame.js');
const kanye = require("./kanyequote.js");


//Make this secret
const token = config.getDiscordBotToken();
const PREFIX = "!";

bot.on("ready", () => {
    console.log("This bot is online!");
});

bot.on("message", msg => {
    let args = msg.content.substring(PREFIX.length).split(" ");
    switch (args[0]) {
        case "clear":
            if (!args[1]) {
                msg.reply("Please specify, !clear (number)");
                return;
            } else {
                msg.channel.bulkDelete(Number(args[1]));
            }
            break;
        case "roll":
            msg.reply("\t" + diceGame.roll(Number(args[1])));
            break;
        case "kanye":
            msg.reply(kanye.getQuote());
    }
});

bot.login(token);