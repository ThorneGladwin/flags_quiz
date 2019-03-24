const langHelper = require("../../helpers/languageHelperFunctions");

module.exports = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;

    return request.type === "IntentRequest" && request.intent.name === "AMAZON.RepeatIntent";
  },
  handle(handlerInput) {
    const speechOutput = langHelper.resourceData(handlerInput).CoreIntents;
    const attributes = handlerInput.attributesManager.getSessionAttributes();
    const counter = attributes.counter;
    const questions = attributes.questions
    const lastQuestionAsked = questions[counter].question;

    return handlerInput.responseBuilder
      .speak(speechOutput.RepeatRequest.OutputSpeech(lastQuestionAsked))
      .reprompt(speechOutput.RepeatRequest.RepromptSpeech(lastQuestionAsked))
      .getResponse();
  }
};
