const CoreIntents = {
  LaunchRequest: {
    OutputSpeech: `Welcome to the flags quiz. I will give you a description of a flag from around the world and all you have to do is guess the country it belongs to. If you would like the full description of how to play, just say "Help". To get started, say "Lets play flags!".`,
    RepromptSpeech: `If you would like the full description of how to play, just say "Help". To get started, say "Lets play flags!"`
  },
  HelpRequest: {
    OutputSpeech: `For each question, I will describe a flag that belongs to a country of the world. You will then need to guess what country it belongs to. Once you have answered all of the questions, you will get your total score. To get started, say "Lets play flags!".`,
    RepromptSpeech: `For each question, I will describe a flag that belongs to a country of the world. You will then need to guess what country it belongs to. Once you have answered all of the questions, you will get your total score. To get started, say "Lets play flags!".`,
  },
  ExitRequest: {
    OutputSpeech: "I hope you enjoyed the flags quiz. Don't forget to leave a review. Goodbye!"
  },
  SessionEndedRequest: {
    OutputSpeech: `I haven't heard a response from you. If you would like to play again later, just say Alexa, play flags quiz". Goodbye!`
  },
  FallbackHandlerRequest: {
    OutputSpeech: "Sorry I didn't catch that, why don't you try saying that again?",
    RepromptSpeech: "Sorry I didn't catch that, why don't you try saying that again?"
  },
  ErrorHandlerRequest: {
    OutputSpeech: "Oops. Something went wrong. Hopefully, I'll have this fixed soon. Goodbye!"
  },
  RepeatRequest: {
    OutputSpeech: (question) => `I'll repeat that for you. ${question}`,
    RepromptSpeech: (question) => `I'll repeat that for you. ${question}`
  }
};

module.exports = {
  CoreIntents
};
