const ListOfBadJokes = [
  "Du bist hier der größte Witz!",
  "Was ist schwarz-weiß und sitzt auf der Schaukel? – Ein Schwinguin.",
  "Wie nennt man ein helles Mammut? – Hellmut.",
  "Was ist flüssiger als Wasser? – Hausaufgaben, die sind überflüssig.",
  "Was haben Frauen und Handgranaten gemeinsam? – Wenn du den Ring abziehst, ist dein Haus weg.",
  "Wie lautet der Vorname vom Reh? – Kartoffelpü.",
  "Was machen Mathematiker im Garten? – Wurzeln ziehen.",
  "Was passiert, wenn man Cola und Bier gleichzeitig trinkt? – Man colabiert.",
  "Was sagt der große Stift zum kleinen? – Wachs mal, Stift.",
  "Was ist grün und klopft an die Tür? – Ein Klopfsalat.",
  "Was trägt einen Frack und hilft im Haushalt? – Ein Diener Schnitzel.",
  "Was ist gesund und kräftig und spielt den Beleidigten? – Ein Schmollkornbrot.",
  "Wie nennt man den Sonnenuntergang auf Finnisch – Hellsinki.",
  "Was ist süß und hangelt sich von Tortenstück zu Tortenstück? – Ein Tarzipan.",
  "Was ist groß, grau und telefoniert aus Afrika? – Ein Telefant.",
  "Was liegt am Strand und spricht undeutlich? – Eine Nuschel.",
  "Was ist orange und schaut durchs Schlüsselloch? – Eine Spannderine.",
  "Was ist violett und sitzt in der Kirche ganz vorne? – Eine Frommbeere.",
  "Was versteckt sich vor der Polizei, ist grün und sauer? – Ein Essig-Schurke.",
  "Was ist orange und geht über die Berge? – Eine Wanderine.",
  "Was ist braun, knusprig und läuft mit dem Korb durch den Wald? – Brotkäppchen.",
  "Was sticht und hat Spaß daran? – Eine Sadistel.",
  "Was ist braun und fährt einen verschneiten Hang hinunter? – Ein Snowbrot.",
  "Was ist rosa und schwimmt im Wasser? – Eine Meerjungsau.",
  "Was hat die AfD nur gegen das Internet? – Da sind zu viele Links.",
  "Was ist braun und späht durchs Schlafzimmerfenster? – Ein Spannzapfen.",
  "Was hüpft von Eisscholle zu Eisscholle und ist schwarz-weiß? – Ein Springuin.",
  "Was ist braun und sitzt hinter Gittern? – Eine Knastanie.",
  "Was ist weiß und springt im Wald umher? – Ein Jumpignon.",
  "Was liegt schnarchend auf der Wiese, ist wollig und weiß? – Ein Schlaf.",
  "Was ist braun, klebrig und läuft in der Wüste umher? – Ein Karamel.",
  "Wo wohnt eine Katze am liebsten? – Im Miezhaus.",
  "Wieso können Skelette schlecht lügen? – Weil sie so gut zu durchschauen sind.",
  "Was trinken Chefs? – Leitungswasser.",
  "Was macht ein Clown im Büro? – Faxen.",
  "Wie nennt man Kaninchen im Fitnessstudio? – Pumpernickel.",
  "Was ist schwarz-weiß und sitzt auf der Schaukel? – Ein Schwinguin.",
  "Was ist süß und hangelt sich von Tortenstück zu Tortenstück? – Ein Tarzipan.",
  "Welches Kätzchen ist kein Tier? – Das Weidenkätzchen.",
  "Was essen Autos am liebsten? – Parkplätzchen.",
  "Wer wohnt im Dschungel und schummelt immer? – Mogli.",
  "Ich habe einen Joghurt fallen gelassen. Er war nicht mehr haltbar.",
  "Ich esse nicht jede Sorte Chips. Ich bin da sehr pringelig.",
  "Wie nennt man ein helles Mammut? – Hellmut.",
  "Was ist weiß uns schaut durchs Schlüsselloch? - Ein Spannbettlaken"
];

module.exports.getABadJoke = () =>{

  const ResponseIdx = Math.floor(Math.random() * ListOfBadJokes.length);

  return(`${ListOfBadJokes[ResponseIdx]}`);
}