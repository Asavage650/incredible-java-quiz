function generateQuiz(questions, quizContainer,resultsContainer,submitButton){
    function showQuestions(questions,quizContainer){

    }
    function showResults(questions,quizContainer,resultsContainer){

    }
    showQuestions(questions,quizContainer);
    submitButton.onclick=function(){
        showResults(questions,quizContainer,resultsContainer);
    }
}
const myQuestions=[
    {
        question: "Commonly used data types DO NOT include:",
        answers:{
            a: 'strings',
            b: 'booleans',
            c: 'alerts',
            d: 'numbers'
        },
        correctAnswer:'c'
    },
    {
        question: "The condition in an if/else statement is enclosed with:",
        answers:{
            a:'quotes',
            b:'curly brackets',
            c:'parenthesis',
            d:'square brackets'
        },
        correctAnswer:'b'
    },
    {
        question:"Arrays in JavaScript can be used to store:",
        answers:{
            a:'numbers and strings',
            b:'other arrays',
            c:'booleans',
            d:'all of the above'
        },
        correctAnswer:'d'
    },
    {
        question: "String values must be enclosed within (blank) when being assigned to variables.",
        answers:{
            a:'commas',
            b:'curly brackets',
            c:'quotes',
            d:'parenthesis'
        },
        correctAnswer:'c'
    },
    {
        question:"A very useful tool used during development and debugging for printing content to the debugger is:",
        answers:{
            a:'JavaScript',
            b:'Terminal/Bash',
            c:'For loops',
            d:'console.log'
        },
        correctAnswer:'d'
    }
]