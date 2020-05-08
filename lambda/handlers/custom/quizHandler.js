const { getQuestions } = require("../../helpers/questionHelperFunctions");
const langHelper = require("../../helpers/languageHelperFunctions");

module.exports = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === "IntentRequest" && (request.intent.name === "QuizIntent" || request.intent.name === "AMAZON.StartOverIntent");
  },
  handle(handlerInput) {
    const speechOutput = langHelper.resourceData(handlerInput).QuizHandler;
    const attributes = handlerInput.attributesManager.getSessionAttributes();
    const response = handlerInput.responseBuilder;
    const questions = getQuestions(5);
    attributes.state = `_QUIZ`;
    attributes.counter = 0;
    attributes.quizScore = 0;
    attributes.questions = questions;
    attributes.incorrectQuestions = [];

    return response
      .speak(speechOutput.FirstQuestion(questions[0].question))
      .reprompt(speechOutput.FirstQuestion(questions[0].question))
      .getResponse();
  }
};
