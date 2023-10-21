const config = require("./config.json");

var Roll = require('roll'),
  roll = new Roll();


//function rolldice(count, dice) {

module.exports.rollcmd = (msg) => {
  const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const rollresult = rolldice(args[0], args[1]);
  console.log(rollresult)
  //const ayy = client.emojis.cache.find(emoji => emoji.name === "D105");
  //msg.reply(rollresult + `  ${ayy}`);
  return rollresult;  
}

//module.exports.rolldice = (count, dice) => {
function rolldice(count, dice) {
var finalList = ""

if (count > 5) { 
  finalList = 'Bitte maximal 5 Würfel rollen'
  return finalList;
  }
  switch (dice) {
    case "d4" :
      for(var i = 0; i < count; i++) {
            var oneDie = roll.roll('d4');
            if(i > 0) {finalList = finalList + ", "};
            finalList = finalList + oneDie.result ;
      }
      return  finalList
      break;
    case "d6" :
      for(var i = 0; i < count; i++) {
            var oneDie = roll.roll('d6');
            if(i > 0) {finalList = finalList + ", "};
            finalList = finalList + oneDie.result ;
      }
      return  finalList
      break;
    case "d10" :
      for(var i = 0; i < count; i++) {
            var oneDie = roll.roll('d10');
            if(i > 0) {finalList = finalList + ", "};
            finalList = finalList + oneDie.result ;
      }
      return  finalList
      break;
    case "d20" :
      for(var i = 0; i < count; i++) {
            var oneDie = roll.roll('d20');
            if(i > 0) {finalList = finalList + ", "};
            finalList = finalList + oneDie.result ;
      }
      return  finalList
      break;
  }
}