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
  ' 5 Brainstorms auf Ex getrunken hat. Wers glaubt...',
  ' wohl Stress mit ein paar Gangern hat.',
  ' gestern große Schwarze Müllsäcke weggeworfen haben soll',
  ' behauptet, die Antwort auf alles sei 42. Sehr weise!',
  ' sich neue Augen beim Ripperdoc einbauen lassen hat!',
  ' hat sich neue Mods beim Ripperdoc einbauen lassen. War bitter nötig, wenn du mich fragst.',
  ' letztens bei Untergrundkämpfen den ersten Platz belegt haben soll',
  ' mit Del unterwegs war!'
];

const ListOfGossipEndinaktiv = [
  ' gerne mal die Glatze von Herrn Walter polieren möchte.',
  ' behauptet, er könne seine Luft 10 Minuten lang anhalten. Pah! Glaubt er, er isn fucking Pirat, oder was?',
  ' wohl Stress mit ein paar Gangern hat.',
  ' letztens von ein paar Straßenkindern ausgeraubt worden sein soll. Pah, Amateur!',
  ' immer noch im trüben fischt...',
]

const ListOfCommonGossip = [
  'Meine Gläser hier spüle ich übrigens täglich. Ehrlich...',
  'Herr Walter schreibt wohl an einem neuen Regelwerk…',
  'Del hat neulich einem Nashorn das Horn abgerissen... glaube der hatte das verdient',
  'Irgendwas ist im Busch, k.a. was aber da kommt was... Großes...',
  'Wenn du so einen großen Blechschädel rumlaufen siehst, dann keine Sorge der Kerl wohnt in meinem Keller, ist harmlos…. Meistens',
  'Habe hier jedes Getränk selbst kreiert.',
  'Belästige mich jetzt nicht. Ich muss hier Gläser spülen.',
  'So Freunde letzte Runde! Spaß, Spaß, Brainstorm für Alle!',
  '\'Peter Cooper Village\' soll umbenannt werden. Ob das stimmt?',
  'Hier soll irgendwo \'ne neue Ripperklinik aufgemacht worden sein.',
  'Meine Entwickler sollen die coolsten Typen sein!',
  'VORSICHT! HINTER DIR! EIN DREIKÖPFIGER MUTANT! Hahahaha!',
  'Hier haben letztens irgendwelche Besoffenen was über Schattenkristalle gelabert. Esoteriker-Trottel...',
  "Habe gehört, dass son hipper Unternehmer 'ne neue Marke für Drohnentaxis etablieren möchte.",
  "Habt ihr von dieser Geschichte in Kanada gehört? Soll wohl ein großes Ding gewesen sein...",
  "Man sagt unsere Erde wird von außerirdischen Wesen die sich 'Schatten' nennen als das 'Land der Schatten' bezeichnet. Als ob wir da nichts zu sagen hätten! ",
  "Der Kerl da drüben, ja der mit dem großen Hut, hat einen Schatten gesehen. Die Wesen gibts wirklich. ",
  "Owen hat die geilste magische Literatur in seinem Laden, auch wenn er immer so tut als wüsste er nichts.... Der Typ ist ne lebende Bibliothek... und bestimmt kein Mensch!",
  "Siehst du die vernarbte Fresse da hinten. Das Gesicht hat schon mehr Feuergefechte erlebt als die meisten sich träumen lassen,.... ich rede von Alpträumen.... Soviel wie die Person säuft muss die einiges verarbeiten.",
  "Im Central Park ist doch immer noch dieser Serienmörder unterwegs, angeblich hat die Polizei aufgegeben, ihn zu suchen.",
  "Ich hab gehört, paar Leute die oft hier sind, wurden zu 'Abkömmmlingen' dieses Schattens, keine Ahnung ob das nun was gutes oder schlechtes ist...",
  "Ich würde die Kanalisation meiden, angeblich gibts da auch irgendwelche Wesen aus einer anderen Welt. Müssen schon ne Menge Kanalarbeiter umgebracht haben.",
  "Es gab hier mal nen Typen, Hepheistos, der ist total auf diese Kristalle abgefahren, bis er angeblich mal von nem lebenden Kristall verfolgt wurde. Glaubst du nicht wirklich, oder?",
  "Ich hab dir doch schon mal von diesen Schattenwesen erzählt? Angeblich hat eines bis vor kurzem direkt hier in den Katakomben unter New York geschlafen und ist nun wieder aufgewacht. Ist aber sicher nicht wahr, stand ja nichts davon in der Zeitung.",
  "Wenn du dir hier nen Namen gemacht hast und wirklich gut bist, da gibt es diesen Mr. Quentin, der bietet die besten Jobs überhaupt. Also was die Bezahlung angeht. Aber er will eben auch nur die Besten. Achja, du wirst Mr. Quentin nicht finden, Mr. Quentin findet dich!",
  "Dieser Typ da mit dem Hut, immer dunkel gekleidet. Früher war der immer mit nem Kumpel da, ne Art Söldner, groß, breit, bewaffnet. Hat immer böse, gewaltätig getan, dabei war er einer der nettesten Männer die je in meinem Laden waren. Aber solltest du ihn mal sehen, das weißt du nicht von mir!",
  "Dieser Tiger, der hier oft am Tresen sitzt, leg dich nicht mit dem an, es heißt, der frisst kleine Kinder.",
  "Der Kaiser hat hier mal ein Gedicht aufgesagt! In meiner Bar! Also, jedenfalls glaube ich, dass es ein Kaiser war..."
]

const ListOfCommonGossipinaktiv = [
  'Siehst du nicht, dass ich hier arbeite?',
  'Nein. Mir ist leider nichts zu Ohren gekommen',
  'Ne, hier passiert ja auch nie was',
  'GIFs sollten hier mal verboten gewesen sein. Wer kommt auf diese Idee?!',
  'Gartenarbeit soll \'netteres Aufräumen\' sein. Ein Narr wer das denkt',
]

module.exports.getTrueGossip = (msg) => {

  typeOfGossip = func.getRandomInt(2);

  switch (typeOfGossip) {
    case 0:
      {
        const StartIdx = Math.floor(Math.random() * ListOfGossipStart.length);
        const EndIdx = Math.floor(Math.random() * ListOfGossipEnd.length);

        let randomUser = msg.guild.members.cache.filter((member) => !member.user.bot).random().user;

        return (`${ListOfGossipStart[StartIdx]} ${randomUser} ${ListOfGossipEnd[EndIdx]}`);
      }

    case 1:
      {
        const ResponseIdx = Math.floor(Math.random() * ListOfCommonGossip.length);

        return (`${ListOfCommonGossip[ResponseIdx]}`);
      }
  }
}