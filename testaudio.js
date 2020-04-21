// Load up the discord.js library
const Discord = require("discord.js");

var fs = require('fs');
var dev = "700028814402650262";
var voiceChannel = "131087538684166144";
const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}
var moan = "/home/pi/discordbotrun/audio/moan2.mp3"

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {

  const channel = client.channels.get(voiceChannel);
  if (!channel) return console.error("The channel does not exist!");

  channel.join().then(connection => {
    console.log('Connected!');
    const dispatcher = connection.playFile(moan);
    dispatcher.resume();
    dispatcher.on("end", () => {channel.leave(); client.destroy()});
  }).catch(console.error);


  //client.destroy();
});


client.login(config.token);
