class Drink {
  constructor(name, price, drinkmessage) {
    this.name = name;
    this.price = price;
    this.drinkmessage = drinkmessage
  }
}

var allDrinks = []

allDrinks.push(new Drink('Wasser', '2 Credits', 'Die Toiletten sind hinten links. Nein Spaß! Hier dein Wasser. Macht 2 Credits'));
allDrinks.push(new Drink('Spezi', '3 Credits', ''));
allDrinks.push(new Drink('Cola', '3 Credits', ''));
allDrinks.push(new Drink('Limo', '3 Credits', ''));
allDrinks.push(new Drink('Kaffee', '3 Credits', 'siehst so aus als hättest du den Kaffee echt nötig, macht trotzdem 3 Credits'));
allDrinks.push(new Drink('Kaffeeplus', '3 Credits', 'Kaffe reicht nicht, gut, hier mit Schuss, macht 9 Credits'));
allDrinks.push(new Drink('Kaffeeextrem', '3 Credits', 'Muss nen Scheiß Tag gewesen sein, hier dein Kaffee Brainstorm, 11 Credits bitte'));
allDrinks.push(new Drink('Bier', '5 Credits', ''));
allDrinks.push(new Drink('Wein', '8 Credits', 'hier, unser bester Wein, für nur 8 Credits'));
allDrinks.push(new Drink('Schnaps', '7 Credits', ''));
allDrinks.push(new Drink('Whiskey', '10 Credits', ''));
allDrinks.push(new Drink('Rum', '10 Credits', ''));
allDrinks.push(new Drink('Brainstorm', '10 Credits', 'ein Brainstorm, macht 10 Credits, bitte direkt zahlen, bevor er seine volle Wirkung entfaltet'));
allDrinks.push(new Drink('Mojito', '10 Credits', ''));
allDrinks.push(new Drink('MoscowMule', '10 Credits', ''));
allDrinks.push(new Drink('IrishCoffee', '10 Credits', ''));

//Essen
allDrinks.push(new Drink('Erdnüsse', '2 Credits', 'hier, ein par extra salzige Erdnüsse'));
allDrinks.push(new Drink('Sandwich', '10 Credits', 'ein Sandwich, hoffe es bekommt'));

module.exports.getRandomDrink = () => {
  return allDrinks[Math.floor(Math.random() * allDrinks.length)];
}

exports.allDrinks = allDrinks;

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
    if (allDrinks[i].name.toLowerCase().includes(command)) {
      return allDrinks[i];
    }
  }
}

module.exports.serviereDrinkString = (command) => {
  for(var i = 0; i < Object.keys(allDrinks).length; i++) {
    //if (allDrinks[i].name.toLowerCase().includes(command)) {
    if (command.includes(allDrinks[i].name.toLowerCase())) {
      return allDrinks[i];
    }
  }
}