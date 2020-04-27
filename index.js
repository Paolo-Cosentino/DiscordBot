const Discord = require('discord.js');
const bot = new Discord.Client();
const diceGame = require('./dicegame.js');
const kanye = require("./kanyequote.js");
require('dotenv').config();

const token = process.env.TOKEN;
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
            kanye.getKanyeAsync()
                .then(data => msg.channel.send('"' + data.quote + '" -Kanye'));
            break;
        default:
            msg.channel.send("Command not found.")
            break;
    }
});

bot.login(token);