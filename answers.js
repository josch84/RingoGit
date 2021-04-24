const config = require("./config.json");
const drinks = require('./drinks.js');
const rolls = require("./roll.js");
const func = require("./functions.js");
const jokes = require("./jokes.js");
const gossip = require("./gossip.js");


module.exports.getAnswere = (msg) =>{
    if ((!msg.content.startsWith(config.prefix) && msg.content.toLowerCase().includes('ringo')) && !msg.author.bot) {
        const chosenDrink = drinks.serviereDrinkString(msg.content.toLowerCase());

        if (typeof chosenDrink === 'object' && !msg.content.toLowerCase().includes('runde')) {
          msg.reply(returnDrink(msg));
          return;
        }
        else if(typeof chosenDrink === 'object' && msg.content.toLowerCase().includes('runde')){
          msg.reply(returnARound(msg));
          return;
        }
        else {
          msg.reply(returnSmallTalk(msg));
          return;
        }
    }

    if (msg.content.startsWith(config.prefix) && !msg.author.bot) //return;
    {
        msg.reply(returnSpecialCommands(msg));
        return;
    }

    console.log('Komme ich dennoch bis zum ende?');
}


//function to return a simple drink
function returnDrink(msg) {
  const chosenDrink = drinks.serviereDrinkString(msg.content.toLowerCase());
  const randomInt = func.getRandomInt(50);

  if (randomInt === 0) {
    return 'ich denke du hattest für heute genug';
    } else {
        if (chosenDrink.drinkmessage != '') {
            return chosenDrink.drinkmessage;
        } else {
            return `hier ein ${chosenDrink.name} für dich, macht ${chosenDrink.price}`;
        }
    }
}


//This function returns a perfect joke for Ringo! 
function returnJoke(msg) {

  /* //Für die Zukunft, falls Ringo witze aus verschiedenen Kategorien auf Lagern haben soll 
  switch (true){
    case msg.content.toLowerCase().includes('schlechten'):
      return jokes.getABadJoke(); 
  }
  */

  return jokes.getABadJoke(); 
}


//Function to return a round 
function returnARound(msg) {
  const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  //Check if arry is empty
  if (args.length === 0){
    return 'Eine Runde was? Äpfel? Birnen?';
  }
      
  const rundeDrink = drinks.serviereDrinkString(msg.content.toLowerCase());

  //Extend this array for further answers for a Round! 
  responsesForRound = [
    `Alle mal herhören, ${msg.author.username} gibt eine Runde ${rundeDrink.name} aus, Prost!`,
    `${msg.author.username} hat heute wohl die Spendierhosen an und gibt jedem einen ${rundeDrink.name} aus!`,
    `Ohh, muss sich ${msg.author.username} wieder ein paar Freunde kaufen? Mir soll's recht sein. ${rundeDrink.name.toUpperCase()} FÜR ALLE!`
    ];

  if (typeof rundeDrink === 'object') {
    return responsesForRound[func.getRandomInt(responsesForRound.length)];
  }
}

//function to give Ringo a little bit more personality and to return smalltalk stuff
function returnSmallTalk(msg) {

  //extend this array for further random answers
  const ResponsesForSmallTalk = [
    "das weiß ich selbst nicht",
    "ich bin wie ich bin",
    "du stellst Fragen ...",
    "komm, trink einfach noch einen",
    "schön dich zu sehen",
    "dich bedien ich doch immer gern",
    "kannst du das präzisieren?",
    "ach was weiß ich, bestell was, oder lass mich in Ruhe",
    "ich glaube du hattest für heute genug..."
    ];

    switch (true) {
      case msg.content.toLowerCase().includes('wie geht'):
          return 'danke der Nachfrage, mir gehts gut, habe ja nette Gäste';

      case msg.content.toLowerCase().includes('gute nacht'):
          return `Gute Nacht ${msg.author.username}! Bis zum nächsten Mal`;

      case msg.content.toLowerCase().includes('bye'):
          return 'bis zum nächsten Mal';

      case msg.content.toLowerCase().includes('guten morgen'):
          return `Guten Morgen ${msg.author.username}`;

      case msg.content.toLowerCase().includes('klatsch'):
      case msg.content.toLowerCase().includes('tratsch'):
      case msg.content.toLowerCase().includes('gossip'):
      case msg.content.toLowerCase().includes('was gibts neues'):
      case msg.content.toLowerCase().includes('gerüchte'):
           return returnGossip(msg);

      case msg.content.toLowerCase().includes('witz') && !msg.content.toLowerCase().includes('witze') :
          return returnJoke(msg);

      default:
          const ResponseIdx = Math.floor(Math.random() * ResponsesForSmallTalk.length);
          return(`${ResponsesForSmallTalk[ResponseIdx]}`);
    } 
}

//function for special commands
function returnSpecialCommands(msg){

  if (msg.content.toLowerCase() === '!karte') {
    var allDrink = drinks.Karte();
    return allDrink;
  }

  if (msg.content.toLowerCase() === '!zufall') {
    const randomDrink = drinks.getRandomDrink();
    return `hier ein ${randomDrink.name} für dich`;
  }

  if (msg.content.toLowerCase() === '!anschreiben') {
      return `anschreiben? Anschreiben gibts hier nicht, die durchschnittliche Lebenserwartung der Gäste hier ist einfach zu niedrig ...`;
  }

  if (msg.content.toLowerCase().includes('!roll ')) {
      const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      const rollresult = rolls.rolldice(args[0], args[1]);
      //const ayy = client.emojis.cache.find(emoji => emoji.name === "D105");
      //msg.reply(rollresult + `  ${ayy}`);
      return rollresult;
  }

  //return 'Sprich mal in ganzen Sätzen mit mir!'

  if (msg.content.toLowerCase().includes('!runde')) {
    return returnARound(msg);
  }
  
  if (msg.content.startsWith(config.prefix) && !msg.author.bot) {
    return returnDrink(msg);
  } 
}

//tbd
function returnGossip(msg){

  return gossip.getTrueGossip(msg);
}