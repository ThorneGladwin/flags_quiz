require("dotenv").config({ path: `${__dirname}/../../.env` });
const Alexa = require("ask-sdk-core");
const coreHandlers = require("./handlers/core");
const customHandlers = require("./handlers/custom");
const errorHandlers = require("./handlers/error");

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    coreHandlers.LaunchRequestHandler,
    coreHandlers.HelpRequestHandler,
    coreHandlers.RepeatRequestHandler,
    coreHandlers.ExitRequestHandler,
    coreHandlers.FallbackRequestHandler,
    coreHandlers.SessionEndedRequestHandler,
    customHandlers.quizHandler,
    customHandlers.answerHandler
  )
  .addErrorHandlers(errorHandlers.ErrorHandler)
  .lambda();
