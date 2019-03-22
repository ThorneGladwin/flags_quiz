const { CoreIntents } = require("./coreIntents");
const { QuizHandler } = require("./quizHandler");
const { AnswerHandler } = require("./answerHandler");

const speech = {
    CoreIntents,
    QuizHandler,
    AnswerHandler
};

module.exports = {
    speech
};