const Discord = require('discord.js');
const func = require("./functions.js");

const ListOfGossipStart = [
  'Ich habe gehört, dass ',
  'Man munkelt, dass',
  'Die Leute tuscheln, dass',
  'Man erzählt sich, dass'
];

const ListOfGossipEnd = [
  ' mit Freunden Pen&Paper spielt. Wasn Nerd!',
  ' immer die Gratis-Erdnüsse aufm Tresen isst',
  ' das Rezept für Brainstorm erfunden hat. Blödes Geschwätz!',
  ' 5 Braunstorms auf Ex getrunken hat. Wers glaubt...',
  ' gerne mal die Glatze von Herrn Walter polieren möchte.',
  ' meine Programmierer die besten Menschen der Welt sind',
  ' gestern große Schwarze Müllsäcke weggeworfen haben soll',
  ' behauptet, die Antwort auf alles sei 42. Sehr weise!',
  ' sich neue Augen beim Ripperdoc einbauen lassen hat!',
  ' hat sich das Gesicht beim Ripperdoc auffrischen lassen. War bitter nötig, wenn du mich fragst.',
  ' soll letztens bei Untergrundkämpfen den ersten Platz belegt haben',
  ' soll letztens von ein paar Straßenkindern ausgeraubt worden sein. Pah, Amateur!',
  ' immer noch im trüben fischt...'
];

const ListOfCommonGossip = [
  'Meine Gläser hier spüle ich übrigens täglich. Ehrlich...',
  'Habe hier jedes Getränk selbst kreiert.',
  'GIFs sollten hier mal verboten gewesen sein. Wer kommt auf diese Idee?!',
  'Gartenarbeit soll \'netteres Aufräumen\' sein. Ein Narr wer das denkt',
  'Belästige mich jetzt nicht. Ich muss hier Gläser spülen.',
  'Siehst du nicht, dass ich hier arbeite?',
  'Nein. Mir ist leider nichts zu Ohren gekommen',
  'Ne, hier passiert ja auch nie was',
  '\'Peter Cooper Village\' soll umbenannt werden. Ob das stimmt?',
  'Hier soll irgendwo \'ne neue Ripperklinik aufgemacht worden sein.'
]

module.exports.getTrueGossip = (msg) =>{

/*
  const list = client.guilds.members();

  list.members.cache.forEach(member => console.log(member.user.username)); 
*/

  typeOfGossip = func.getRandomInt(2);

  switch(typeOfGossip)
  {
    case 0:
    {
      const StartIdx = Math.floor(Math.random() * ListOfGossipStart.length);
      const EndIdx = Math.floor(Math.random() * ListOfGossipEnd.length);

      //auslesen von irgendeinem Usernamen auf dem Server. 

      return (`${ListOfGossipStart[StartIdx]} USERNAME ${ListOfGossipEnd[EndIdx]}`);
      break;
    }
    
    case 1:
    {
      const ResponseIdx = Math.floor(Math.random() * ListOfCommonGossip.length);

      return(`${ListOfCommonGossip[ResponseIdx]}`);
    }
  }
}