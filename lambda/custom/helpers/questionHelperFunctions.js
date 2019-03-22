const { questions } = require("../questions");

const getQuestions = (numberOfQuestions) => {
    let questionIndexes = [];
    let selectedQuestions = [];
    while (questionIndexes.length < numberOfQuestions) {
        const num = generateNumber();
        if(!questionIndexes.includes(num)) {
            questionIndexes.push(num);
        }
    }
    questionIndexes.forEach(i => {
        selectedQuestions.push(questions[i]);
    });
    return selectedQuestions;
};

const generateNumber = () => {
    return Math.floor(Math.random() * questions.length);
};

module.exports = {
    getQuestions
};