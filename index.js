const keepAlive = require("./server");
const Discord = require('discord.js');
const client = new Discord.Client();
const answers = require("./answers.js");
const smalltalk = require("./smalltalk.js");


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
  const channel = client.channels.cache.get('829093108200505384');
  channel.send(`Willkommen im ComeIn, ${member}. Schau dich in Ruhe um, beachte die Regeln, und du wirst hier viel Spaß haben!`);
});


client.on("message", (msg) => {
  //console.log('TEst')
  answers.getAnswere(msg);

}
);

function TimerMessages() {
  const heute = new Date(); 
  var h = heute.getHours();
  var m = heute.getMinutes();
  //Zeit ist UTC, muss bei zeitumstellung beachtet oder besser programmiert werden
  if (h === 5 && m === 0) {
    console.log(`GutenMorgen`);
    smalltalk.GutenMorgen(client);
  }
  if (h === 10 && m ===0) {
    console.log(`Mahlzeit`);
    smalltalk.Mahlzeit(client);
  }
  if (h === 15 && m === 0) {
    console.log(`GutenAbend`);
    smalltalk.GutenAbend(client);
  }
};

setInterval(TimerMessages, 60000);
