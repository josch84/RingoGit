const func = require("./functions.js");

class Drink {
  constructor(name, price, drinkmessage) {
    this.name = name;
    this.price = price;
    this.drinkmessage = drinkmessage
  }
}

var allDrinks = []

allDrinks.push(new Drink('Spezi', '3 Credits', ''));
allDrinks.push(new Drink('Cola', '3 Credits', ''));
allDrinks.push(new Drink('Limo', '3 Credits', ''));
allDrinks.push(new Drink('Eistee', '4 Credits', ''));
allDrinks.push(new Drink('schwarzer Tee', '3 Credits', ''));

//Kaffee-Spezialitäten
allDrinks.push(new Drink('Kaffee', '3 Credits', 'siehst so aus als hättest du den Kaffee echt nötig, macht trotzdem 3 Credits'));
allDrinks.push(new Drink('Kaffeeplus', '9 Credits', 'Kaffe reicht nicht, gut, hier mit Schuss, macht 9 Credits'));
allDrinks.push(new Drink('Kaffeeextrem', '11 Credits', 'Muss nen Scheiß Tag gewesen sein, hier dein Kaffee mit Brainstorm, 11 Credits bitte'));
allDrinks.push(new Drink('Kakao', '4 Credits', 'Nie gedacht, dass das hier jemand mal bestellt...'));

allDrinks.push(new Drink('Bier', '5 Credits', ''));
allDrinks.push(new Drink('Wein', '8 Credits', 'hier, unser bester Wein, für nur 8 Credits'));
allDrinks.push(new Drink('Met', '7 Credits', ''));
allDrinks.push(new Drink('Erdbeerlimes', '6 Credits', ''));
allDrinks.push(new Drink('Schnaps', '7 Credits', ''));
allDrinks.push(new Drink('Whiskey', '10 Credits', ''));
allDrinks.push(new Drink('Rum', '10 Credits', ''));
allDrinks.push(new Drink('Brainstorm', '10 Credits', 'ein Brainstorm, macht 10 Credits, bitte direkt zahlen, bevor er seine volle Wirkung entfaltet'));
allDrinks.push(new Drink('Mojito', '10 Credits', ''));
allDrinks.push(new Drink('MoscowMule', '10 Credits', ''));
allDrinks.push(new Drink('IrishCoffee', '10 Credits', ''));
allDrinks.push(new Drink('Cuba Libre', '10 Credits', ''));
allDrinks.push(new Drink('Gin', '9 Credits', 'ein Gin für dich, habe gehört den trinkt hier sonst nur [cxt]schnitzel'));

allDrinks.push(new Drink('Wasser', '2 Credits', 'Die Toiletten sind hinten links. Nein Spaß! Hier dein Wasser. Macht 2 Credits'));

allDrinks.push(new Drink('Ice\' Protein-Milch', '10 Credits', 'Die geht direkt in die Muskulatur! Lass sie dir schmecken!'));

allDrinks.push(new Drink('Irish Car Bomb', '10 Credits', 'Bitteschön! Happy St. Patricks Day!'));
allDrinks.push(new Drink('Guinness', '8 Credits', 'Bitteschön! Happy St. Patricks Day!'));

//Winter edition
allDrinks.push(new Drink('Glühwein', '5 Credits', 'ein Glühwein für dich, mit Grüßen von Herrn Walter, geht auf ihn'));

//Essen
allDrinks.push(new Drink('Erdnüsse', '2 Credits', 'hier, ein paar extra salzige Erdnüsse'));
allDrinks.push(new Drink('Sandwich', '10 Credits', 'ein Sandwich, hoffe es bekommt'));

exports.allDrinks = allDrinks;

module.exports.getRandomDrink = () => 
{
  var randomDrink = allDrinks[Math.floor(Math.random() * allDrinks.length)];

  console.log(randomDrink.name);
  var result = module.exports.serviereDrinkString(randomDrink.name); 

  console.log(result);

  return result;
}

exports.Karte = () =>{
  var finalList = "Die Karte? Wohl ein Neuling? Na dann such dir mal was aus: ";
       for(var i = 0; i < Object.keys(allDrinks).length; i++) {
           const listOfDrinks = allDrinks[i].name ;
           if(i > 0) {finalList = finalList + ", "};
           finalList = finalList + listOfDrinks ;
           }
  return finalList
}

module.exports.serviereDrink = (command) => {
  for(var i = 0; i < Object.keys(allDrinks).length; i++) {
    //if (allDrinks[i].name.toLowerCase().includes(" " + command) || allDrinks[i].name.toLowerCase().includes(command + " ")) {
    if (allDrinks[i].name.toLowerCase().includes(command)) {
      console.log(" " + command);
      return allDrinks[i];
    }
  }
}

module.exports.serviereDrinkString = (command) => 
{
  const randomInt = func.getRandomInt(10);
  
  for(var i = 0; i < Object.keys(allDrinks).length; i++)
  {
    //if (allDrinks[i].name.toLowerCase().includes(command)) {
    if (command.includes(allDrinks[i].name.toLowerCase()))
    {
      //Special handling for 'Erdnüsse'
      if (allDrinks[i].name.toString() == 'Erdnüsse')
      {
        if(randomInt === 0)
          return 'hier sind einige extra scharfe Wasabi'
        if (randomInt === 1)
          return 'Erdnüsse sind aus, aber hier sind ein paar Käse-Pringles'
      }

      //Special handling for 'Glühwein'
      if (allDrinks[i].name.toString() == 'Glühwein')
      {
        const d = new Date();
        
        if(d.getMonth() === 1 || d.getMonth() === 11 || d.getMonth() === 12)
          return allDrinks[i];
        else
          return 'Tut mir leid, den Verkaufe ich nur von Dezember bis Januar.'
      }

      //special handling for "Irish Car Bomb"/"Guinness"
      if (allDrinks[i].name.toString() == 'Irish Car Bomb' ||
          allDrinks[i].name.toString() == 'Guinness')
      {
        const d = new Date();

        if(d.getDate() === 17 && d.getMonth() === 3)
          return allDrinks[i];
        else
          return 'Tut mir leid, habe ich nur am St. Patricks Day im Angebot!'
      }

      /*
      //special handling for "Bier". Ringo gibt eine Maß-Bier, wenn das Oktoberfest offen ist

      //Eröffnet wird seither am Samstag nach dem 15. September, Ende des Festes ist traditionell der erste Sonntag im Oktober. Seit 2000 gilt folgende Regel: Ist der 1. oder 2. Oktober ein Sonntag, wird das Fest bis zum Tag der Deutschen Einheit am 3. Oktober verlängert
      if(allDrinks[i].name.toString() == 'Bier')
      {
        const dOktoberFest = new Date("October 15");
        const d = new Date();
        let dayAsString = d.getDay();
        let dayAsNumber = d.getDate();

        if(d.getMonth() === 10 && d.getDate() > 15 && ) 
        {
          
        }
      }
      */
      
      return allDrinks[i];
    }
  }
}