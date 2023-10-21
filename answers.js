const config = require("./config.json");
const drinks = require('./drinks.js');
const rolls = require("./roll.js");
const func = require("./functions.js");
const jokes = require("./jokes.js");
const gossip = require("./gossip.js");
const smalltalk = require("./smalltalk.js");


const MSG_TYPE_DRINK = 1;
const MSG_TYPE_ROUND = 2;
const MSG_TYPE_JOKE = 3;
const MSG_TYPE_GOSSIP = 4;
const MSG_TYPE_HELP = 5;
const MSG_TYPE_SMALLTALK = 6;
const MSG_TYPE_KARTE = 7;
const MSG_TYPE_ROLL = 8;
const MSG_TYPE_DRINKZUFALL = 9;

//module.exports.Gutenmorgen = (client) => {
//  //const channel = client.channels.cache.find(channel => channel.name === '-bar-')
//  const channel = client.channels.cache.get('829093108200505384');
//  channel.send(`Guten Morgen an alle Gäste im ComeIn, Kaffee ist gekocht, umsonst gibt es wie immer nichts!`);
//};

module.exports.getAnswere = (msg) => {

  //typeOfMessage = analyzeMsg(msg);

  typeOfMessage = 0; //Temp till this analyzeMsg Func is working

  //Possible Soultion for a better overview of the different kinds of messages?
  switch (typeOfMessage) {
    case MSG_TYPE_DRINK: {
      console.log('MSG_TYPE_DRINK');
      msg.reply(returnDrink(msg));
      break;
    }
    case MSG_TYPE_ROUND: {
      console.log('MSG_TYPE_ROUND');
      msg.reply(returnARound(msg));
      break;
    }
    case MSG_TYPE_JOKE: {
      console.log('MSG_TYPE_JOKE');
      msg.reply(returnJoke(msg));
      break;
    }
    case MSG_TYPE_GOSSIP: {
      console.log('MSG_TYPE_GOSSIP');
      msg.reply(returnGossip(msg));
      break;
    }
    case MSG_TYPE_HELP: {
      console.log('MSG_TYPE_HELP');
      sendHelp(); //No msg reply needed here. Message will be send to Requester direct 
      break;
    }
    case MSG_TYPE_SMALLTALK: {
      console.log('MSG_TYPE_SMALLTALK');
      msg.reply(returnSmallTalk(msg));
      break;
    }
    case MSG_TYPE_KARTE: {
      console.log('MSG_TYPE_KARTE');
      var allDrink = drinks.Karte();
      return allDrink;
      break;
    }
    case MSG_TYPE_ROLL: {
      console.log('MSG_TYPE_ROLL');
      msg.reply(rolls.rollcmd(msg));
      break;
    }
    case MSG_TYPE_DRINKZUFALL: {
      console.log('MSG_TYPE_DRINKZUFALL');
      msg.reply(drinks.getRandomDrink());
      break;
    }
    default: {
      //console.log('default');
      break;
    }
  }

  //return; //Temp

  if ((!msg.content.startsWith(config.prefix) && msg.content.toLowerCase().includes('ringo')) && !msg.author.bot) {

    const chosenDrink = drinks.serviereDrinkString(msg.content.toLowerCase());

    if (typeof chosenDrink === 'object' && !msg.content.toLowerCase().includes('runde')) {
      msg.reply(returnDrink(msg));
      return;
    }
    else if (/*typeof chosenDrink === 'object' && */msg.content.toLowerCase().includes('runde')) {
      msg.reply(returnARound(msg));
      return;
    }
    else if (msg.content.toLowerCase().includes('anschreiben')) {
      msg.reply(`anschreiben? Anschreiben gibts hier nicht, die durchschnittliche Lebenserwartung der Gäste hier ist einfach zu niedrig ...`);
      return;
    }
    else if (typeof chosenDrink === 'string') {
      //console.log('Test');
      msg.reply(chosenDrink);
      return;
    }
    else {
      console.log(chosenDrink);
      msg.reply(returnSmallTalk(msg));
      return;
    }
  }

  if (msg.content.startsWith(config.prefix) && !msg.author.bot) //return;
  {
    const returnmsg = returnSpecialCommands(msg)
    if (typeof returnmsg != "undefined" && returnmsg != "") {
      msg.reply(returnmsg)
    }

    //msg.reply(returnSpecialCommands(msg));
    return;
  }
}


//function to return a simple drink
function returnDrink(msg) {
  const chosenDrink = drinks.serviereDrinkString(msg.content.toLowerCase());
  const randomInt = func.getRandomInt(50);

  if (typeof chosenDrink != 'object') {
    stack = new Error().stack;
    console.log(stack);
    return 'Tut mir leid. Das habe ich jetzt nicht verstanden...';
  }



  if (randomInt === 1) {
    return 'ich denke du hattest für heute genug';
  } else {
    if (chosenDrink.drinkmessage != '') {
      return chosenDrink.drinkmessage;
    } else {
      return `Hier ein ${chosenDrink.name} für dich, macht ${chosenDrink.price}`;
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
  console.log("returnARound");

  const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  console.log(args.length);

  //Check if arry is empty
  if (args.length === 0) {
    return 'Hab ich nich...';
  }

  const rundeDrink = drinks.serviereDrinkString(msg.content.toLowerCase());

  if (typeof rundeDrink != 'object') {
    return 'Runde was? Hab ich nich...';
  }

  //Extend this array for further answers for a Round! 
  responsesForRound = [
    `Alle mal herhören, ${msg.author.username} gibt eine Runde ${rundeDrink.name} aus, Prost!`,
    `${msg.author.username} hat heute wohl nen guten Tag und gibt jedem einen ${rundeDrink.name} aus!`,
    `Ohh, ${msg.author.username} gibt einen aus! Mir soll's recht sein. ${rundeDrink.name.toUpperCase()} FÜR ALLE!`
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
    "Was wolltest du bestellen",
    "hmm, was?",
    "ja ja",
    "Erzähl!",
    "Hier, der Brainstorm geht auf mich",
    "Mach den Tiger nicht wütend...",
    "ich glaube du hattest für heute genug..."
  ];

  const ResponsesToAThx = [
    `Kein Thema, ${msg.author.username}! Für dich doch immer!`,
    'Kein Stress. Ist schließlich mein Job!',
    'Gerne doch!',
    'Klar doch. Sonst noch Wünsche?'
  ]

  switch (true) {
    case msg.content.toLowerCase().includes('wie geht'):
      return 'danke der Nachfrage, mir gehts gut, habe ja nette Gäste';

    case msg.content.toLowerCase().includes('gn8'):
    case msg.content.toLowerCase().includes('gute nacht'):
      return `Gute Nacht ${msg.author.username}! Bis zum nächsten Mal`;

    case msg.content.toLowerCase().includes('bye'):
      return 'bis zum nächsten Mal';

    case msg.content.toLowerCase().includes('moin'):
    case msg.content.toLowerCase().includes('servus'):
    case msg.content.toLowerCase().includes('hallo'):
      return `Servus ${msg.author.username}!`;

    case msg.content.toLowerCase().includes('guten abend'):
      return `Guten Abend ${msg.author.username}`;

    case msg.content.toLowerCase().includes('guten morgen'):
      return `Guten Morgen ${msg.author.username}`;

    case msg.content.toLowerCase().includes('danke'): {
      const ResponseIdx = Math.floor(Math.random() * ResponsesToAThx.length);
      return (`${ResponsesToAThx[ResponseIdx]}`);
    }

    case msg.content.toLowerCase().includes('klatsch'):
    case msg.content.toLowerCase().includes('tratsch'):
    case msg.content.toLowerCase().includes('gossip'):
    case msg.content.toLowerCase().includes('was gibts neues'):
    case msg.content.toLowerCase().includes('gerücht'):
      return returnGossip(msg);

    case msg.content.toLowerCase().includes('witz') && !msg.content.toLowerCase().includes('witze'):
      return returnJoke(msg);

    default:
      const ResponseIdx = Math.floor(Math.random() * ResponsesForSmallTalk.length);
      return (`${ResponsesForSmallTalk[ResponseIdx]}`);
  }
}

//function for special commands
function returnSpecialCommands(msg) {

  if (msg.content.toLowerCase() === '!karte') {
    var allDrink = drinks.Karte();
    return allDrink;
  }

  if (msg.content.toLowerCase() === '!zufall') {
    return drinks.getRandomDrink()
  }

  if (msg.content.toLowerCase() === '!anschreiben') {
    return `anschreiben? Anschreiben gibts hier nicht, die durchschnittliche Lebenserwartung der Gäste hier ist einfach zu niedrig ...`;
  }

  if (msg.content.toLowerCase().includes('!roll ')) {
    return rolls.rollcmd(msg)
  }

  //return 'Sprich mal in ganzen Sätzen mit mir!'

  if (msg.content.toLowerCase().includes('!runde')) {
    return returnARound(msg);
  }

  if (msg.content.toLowerCase().includes('!hilfe')) {
    sendHelp(msg);
    return;
  }

  if (msg.content.startsWith(config.prefix) && !msg.author.bot) {
    return returnDrink(msg);
  }
}

//returns a gossip answer from the according library
function returnGossip(msg) {

  return gossip.getTrueGossip(msg);
}

function sendHelp(msg) {
  msg.author.send(`Hallo ${msg.author.username}, ich bin Ringo, der Barkeeper hier im Come In. 
    Wenn du etwas trinken möchtest, sprich mich einfach mit meinem Namen an, und sag was du gerne hättest. 
    Am besten schaust du dir vorher mit dem Befehle !karte an, was es alles gibt. Du kannst dich auch mit !zufall überraschen lassen, oder eine Runde ausgeben. 
    Ach, du denkst drüber nach, die Getränke anschreiben zu lassen? Na versuchs mal.
    Außerdem kannst du auch einfach so mit mir sprechen. Je nachdem was du wissen möchtest, kann ich dir ein 
    paar Witze oder auch Gerüchte über das Come In, seine Gäste und die Gegend hier erzählen.
    Mehr Infos findest du auch bei den Regeln.`);
  return ''
}

function analyzeMsg(msg) {

  if (msg.author.bot) {
    return 0;
  }

  if (msg.content.startsWith(config.prefix)) {

    /* 
    if (msg.content.toLowerCase().includes('!hilfe')){
      return MSG_TYPE_HELP;
    }
      Hier weitere Ringo Commands
    else if (msg.content.toLowerCase().includes('!hilfe')){

    }
    */
    switch (true) {
      case msg.content.toLowerCase().includes('!hilfe'):
        return MSG_TYPE_HELP;
        break;
      case msg.content.toLowerCase().includes('!karte'):
        return MSG_TYPE_KARTE;
        break;
      case msg.content.toLowerCase().includes('!roll '):
        return MSG_TYPE_ROLL;
        break;
      case msg.content.toLowerCase().includes('!zufall'):
        return MSG_TYPE_DRINKZUFALL;
        break;
    }
  }
  else if (msg.content.toLowerCase().includes('ringo')) {
    console.log(msg.content);

    const chosenDrink = drinks.serviereDrinkString(msg.content.toLowerCase());

    console.log(chosenDrink);

    if (typeof chosenDrink === 'object' && !msg.content.toLowerCase().includes('runde')) {
      return MSG_TYPE_DRINK;
    }
    else if (msg.content.toLowerCase().includes('runde')) {
      return MSG_TYPE_ROUND;
    }
    else if (msg.content.toLowerCase().includes('irgendwas')) {
      msg.reply('mh? Du möchtest irgendwas? Klar, haben wir da...');
      return MSG_TYPE_DRINKZUFALL;
    }
    /*
    else if(jokes.DoesCustomerWantsAJoke(msg))
    {
      return MSG_TYPE_JOKE;
    }
    */
  }
}