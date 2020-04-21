// Load up the discord.js library
const Discord = require("discord.js");

var fs = require('fs');
var dev = "700028814402650262";

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {

  const channel = client.channels.cache.get(dev);

  var contents = fs.readFileSync('/home/pi/discordbotrun/error.log', 'utf8');
  console.log("UPDATE: " + contents);
  channel.send(contents).then(() => client.destroy());
});


client.login(config.token);
