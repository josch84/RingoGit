const keepAlive = require("./server")
const Discord = require('discord.js');
const client = new Discord.Client();
//const drinkresponse = require("./drinks.json");
const answers = require("./answers.js")


keepAlive();
const myToken = process.env['sec_Token'];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//client.login(config.token);
client.login(myToken);

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  //const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
  // Do nothing if the channel wasn't found on this server
  //if (!channel) return;
  // Send the message, mentioning the member
  msg.channel.send(`Willkommen im ComeIn, ${member}. Schau dich in Ruhe um, beachte die Regeln, und du wirst hier viel Spaß haben!`);
});


client.on("message", (msg) => {
    answers.getAnswere(msg);
    
}
);
