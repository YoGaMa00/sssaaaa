const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("NTMzNTk3MDg0MjQzMTk3OTUy.XTz0vQ.QacyHYgPXNxv529Mft_6Q14juug")
setInterval(function() {
channel.send(انا هبقى مليونير);
}, 30)
})

client.login(process.env.BOT_TOKEN);