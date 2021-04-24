const config = require("./config.json");
const drinks = require('./drinks.js');
const rolls = require("./roll.js")
const func = require("./functions.js")
const Responses = ["das weiß ich selbst nicht", "ich bin wie ich bin", "du stellst Fragen ...", "komm, trink einfach noch einen", "schön dich zu sehen", "dich bedien ich doch immer gern", "kannst du das präzisieren?", "ach was weiß ich, bestell was, oder lass mich in Ruhe", "ich glaube du hattest für heute genug..."];


module.exports.getAnswere = (msg) =>{
    if ((!msg.content.startsWith(config.prefix) && msg.content.toLowerCase().includes('ringo')) && !msg.author.bot) {
        const chosenDrink = drinks.serviereDrinkString(msg.content.toLowerCase());
        if (typeof chosenDrink === 'object' && !msg.content.toLowerCase().includes('runde')) {
            const randomInt = func.getRandomInt(50);
            if (randomInt === 0) {
                msg.reply('ich denke du hattest f�r heute genug')
            } else {
                if (chosenDrink.drinkmessage != '') {
                    msg.reply(chosenDrink.drinkmessage)
                } else {
                    msg.reply(`hier ein ${chosenDrink.name} f�r dich, macht ${chosenDrink.price}`);
                }
            }
        }
        else {
            switch (true) {
                case msg.content.toLowerCase().includes('wie geht'):
                    msg.reply('danke der Nachfrage, mir gehts gut, habe ja nette G�ste')
                    break;

                case msg.content.toLowerCase().includes('gute nacht'):
                    msg.reply('bis zum n�chsten Mal')
                    break;

                case msg.content.toLowerCase().includes('bye'):
                    msg.reply('bis zum n�chsten Mal')
                    break;

                case msg.content.toLowerCase().includes('guten morgen'):
                    msg.channel.send(`Guten Morgen ${msg.author.username}`)
                    break;

                case msg.content.toLowerCase().includes('runde'):
                    if (typeof chosenDrink === 'object') {
                        const randomInt = func.getRandomInt(2);
                        if (randomInt === 0) {
                            msg.channel.send(`Alle mal herh�ren, ${msg.author.username} gibt eine Runde ${chosenDrink.name} aus, Prost!`);
                        } else {
                            msg.channel.send(`${msg.author.username} hat heute wohl die Spendierhosen an und gibt jedem einen ${chosenDrink.name} aus!`);
                        }
                    }
                    break;

                default:
                    const Response = Math.floor(Math.random() * Responses.length);
                    msg.reply(`${Responses[Response]}`);
            }
        }
    }

    if (msg.content.startsWith(config.prefix) && !msg.author.bot) //return;
    {
        if (msg.content.toLowerCase() === '!karte') {
            var allDrink = drinks.Karte();
            msg.reply(allDrink);
        }

        if (msg.content.toLowerCase() === '!zufall') {
            const randomDrink = drinks.getRandomDrink();
            msg.reply(`hier ein ${randomDrink.name} f�r dich`);
        }

        if (msg.content.toLowerCase() === '!anschreiben') {
            msg.reply(`anschreiben? Anschreiben gibts hier nicht, die durchschnittliche Lebenserwartung der G�ste hier ist einfach zu niedrig ...`);
        }

        if (msg.content.toLowerCase().includes('!roll ')) {
            const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
            const command = args.shift().toLowerCase();
            const rollresult = rolls.rolldice(args[0], args[1]);
            //const ayy = client.emojis.cache.find(emoji => emoji.name === "D105");
            //msg.reply(rollresult + `  ${ayy}`);
            msg.reply(rollresult);
        }

        if (msg.content.toLowerCase().includes('!runde ')) {
            const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
            const command = args.shift().toLowerCase();
            const rundeDrink = drinks.serviereDrink(args[0].toLowerCase());
            if (typeof rundeDrink === 'object') {
                const randomInt = func.getRandomInt(2);
                if (randomInt === 0) {
                    msg.channel.send(`Alle mal herh�ren, ${msg.author.username} gibt eine Runde ${args[0]} aus, Prost!`);
                } else {
                    msg.channel.send(`${msg.author.username} hat heute wohl die Spendierhosen an und gibt jedem einen ${args[0]} aus!`);
                }
            }
        }

        if (msg.content.startsWith(config.prefix) && !msg.author.bot) {
            const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
            const command = args.shift().toLowerCase();
            const chosenDrink = drinks.serviereDrink(command);
            if (typeof chosenDrink === 'object') {
                const randomInt = func.getRandomInt(50);
                if (randomInt === 0) {
                    msg.reply('ich denke du hattest f�r heute genug')
                } else {
                    if (chosenDrink.drinkmessage != '') {
                        msg.reply(chosenDrink.drinkmessage)
                    } else {
                        msg.reply(`hier ein ${chosenDrink.name} f�r dich, macht ${chosenDrink.price}`);
                    }
                }
            }
        }
        //if(drinkresponse[msg.content.toLowerCase()]) {
        //  msg.reply(drinkresponse[msg.content.toLowerCase()]);
        //}
    }
}