const { isCorrect, getSpeechCon } = require("../../helpers/answerHelperFunctions");
const langHelper = require("../../helpers/languageHelperFunctions");

module.exports = {
  canHandle(handlerInput) {
    const attributes = handlerInput.attributesManager.getSessionAttributes();
    const request = handlerInput.requestEnvelope.request;

    return attributes.state === "_QUIZ" && request.type === "IntentRequest" && request.intent.name === "AnswerIntent";
  },
  handle(handlerInput) {
    const speechOutput = langHelper.resourceData(handlerInput).AnswerHandler;
    const attributes = handlerInput.attributesManager.getSessionAttributes();
    const response = handlerInput.responseBuilder;
    let speakOutput = ``;
    let repromptOutput = ``;
    const counter = attributes.counter;
    const questions = attributes.questions;

    //IF YOUR QUESTION COUNT IS LESS THAN 5, WE NEED TO ASK ANOTHER QUESTION.
    if (attributes.counter < 4) {
      const correct = isCorrect(handlerInput.requestEnvelope.request.intent.slots, questions[counter].answer);
      attributes.counter = attributes.counter + 1;

      if (correct) {
        speakOutput = getSpeechCon(true);
        attributes.quizScore += 1;
        handlerInput.attributesManager.setSessionAttributes(attributes);
      } else {
        speakOutput = getSpeechCon(false);
        attributes.incorrectQuestions.push(questions[counter]);
      }

      speakOutput += questions[counter + 1].question;
      repromptOutput = questions[counter + 1].question;

      return response
        .speak(speakOutput)
        .reprompt(repromptOutput)
        .getResponse();
    } else {
      return response
        .speak(speechOutput.Results(attributes.quizScore))
        .reprompt(speechOutput.Results(attributes.quizScore))
        .getResponse();
    }
  }
};
