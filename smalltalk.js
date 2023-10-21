const config = require("./config.json");
const func = require("./functions.js");

module.exports.getGreetings = (msg) => {

}

module.exports.getGoodbyes = (msg) => {

}

module.exports.getRandomSentences = (msg) => {

}

module.exports.GutenMorgen = (client) => {
  const GutenMorgenTexte = [
    `Guten Morgen Freunde! Kaffee ist gekocht und ein paar Kekse hab ich auch noch auf den Tresen gestellt. Bedient euch!`,
    'Guten Morgen, seid ihr auch alle so gut drauf wie ich?'
  ];
  console.log(`GutenMorgenTexte`);
  const channel = client.channels.cache.get('829093108200505384');
  const ResponseIdx = Math.floor(Math.random() * GutenMorgenTexte.length);
  channel.send(`${GutenMorgenTexte[ResponseIdx]}`);
}

module.exports.Mahlzeit = (client) => {
  const MahlzeitTexte = [
    `Schönen Mittag euch allen!`,
    `Schönen Mittag euch allen!`,
  ];
  console.log(`MahlzeitTexte`);
  const channel = client.channels.cache.get('829093108200505384');
  const ResponseIdx = Math.floor(Math.random() * MahlzeitTexte.length);
  channel.send(`${MahlzeitTexte[ResponseIdx]}`);
}

module.exports.GutenAbend = (client) => {
  const FeierabendTexte = [
    `Für alle Arbeitenden steht hier ein kühles Erfrischungsgetränk bereit.`,
    `Für alle Arbeitenden steht hier ein kühles Erfrischungsgetränk bereit.`
  ];
  console.log(`FeierabendTexte`);
  const channel = client.channels.cache.get('829093108200505384');
  const ResponseIdx = Math.floor(Math.random() * FeierabendTexte.length);
  channel.send(`${FeierabendTexte[ResponseIdx]}`);
}