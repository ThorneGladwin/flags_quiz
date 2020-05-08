const isCorrect = (slots, correctAnswer) => {
  for (const slot in slots) {
    if (Object.prototype.hasOwnProperty.call(slots, slot) && slots[slot].value !== undefined) {
      if (slots[slot].value.toString().toLowerCase() === correctAnswer.toString().toLowerCase()) {
        return true;
      }
    }
  }

  return false;
};

const getSpeechCon = type => {
  if (type)
    return `<say-as interpret-as='interjection'>${
      speechConsCorrect[Math.floor(Math.random() * speechConsCorrect.length)]
    }! </say-as><break strength='strong'/>`;
  return `<say-as interpret-as='interjection'>${
    speechConsWrong[Math.floor(Math.random() * speechConsWrong.length)]
  } </say-as><break strength='strong'/>`;
};

const speechConsCorrect = [
  "Booya. ",
  "All righty. ",
  "Bam. ",
  "Bingo. ",
  "Boom. ",
  "Bravo. ",
  "Cha Ching. ",
  "Hip hip hooray. ",
  "Hurrah. ",
  "Hurray. ",
  "Huzzah. ",
  "Kaching. ",
  "Way to go. ",
  "Well done. ",
  "Woo hoo. ",
  "Yay. "
];
const speechConsWrong = [
  "Aw man. ",
  "Blast. ",
  "Bummer. ",
  "Darn. ",
  "D'oh. ",
  "Dun dun dun. ",
  "Oh boy. ",
  "Oh dear. ",
  "Oof. ",
  "Ouch. ",
  "Uh oh. ",
  "Whoops a daisy. ",
  "Yikes. "
];

module.exports = {
  isCorrect,
  getSpeechCon
};
