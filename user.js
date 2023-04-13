const start_btn = document.querySelector(".start_btn");
const info_text = document.querySelector(".information_about_quiz");
const exit_btn = info_text.querySelector(".buttons .quit");
const quiz_box = document.querySelector(".quiz_box");
const results_box = document.querySelector(".results_box");
const time_line = document.querySelector("header", ".time_line");
const timeCount = document.querySelector(".timer", ".timer_seconds");
const replay_btn = document.querySelector(".buttons .replay_btn");
const quit_quiz = document.querySelector(".buttons .quit");
const button_list = document.querySelector(".button_list");
let currentQuestionid = 0;
let timeValue = 60;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let widthValue = 0;
const restart_quiz = document.querySelector(" .restart");
const quit = document.querySelector(".quit");

start_btn.onclick = () => {
  nextQuestion(true);
};
function generateButtons() {
  for (i = 0; i < 4; i++) {
    button = document.createElement("button");
    divwrapper = document.createElement("div");
    button.onclick = () => {
      if (i == questions[currentQuestionid].correcAns) {
        userScore++;
        console.log("Correct Answer!");
        console.log("Your correct answers =");
      } else {
        console.log("Wrong answer");
      }

      nextQuestion();
    };
    button.innerHTML = questions[currentQuestionid].options[i];
    divwrapper.appendChild(button);
    button_list.appendChild(divwrapper);
  }
}
function nextQuestion(start) {
  button_list.textContent = "";
  if (start) {
    currentQuestionid = 0;
    info_text.classList.add("hide");
    start_btn.classList.add('hide');
    replay_btn.classList.remove('hide');
    startTimer();
  } else {
    currentQuestionid++;
    if (currentQuestionid == questions.length) {
      endQuiz();
    }
  }
  showQuestions();
  generateButtons();
}
function endQuiz() {
  showResult();
  clearInterval(counter);
  button_list.textContent = "";
  replay_btn.classList.remove('hide')
}
function showQuestions() {
  const que_text = document.querySelector(".que_text");
  let que_tag =
    "<span>" +
    questions[currentQuestionid].id +
    "." +
    questions[currentQuestionid].question +
    "<span>";
  que_text.innerHTML = que_tag;
}





replay_btn.onclick = () => {
  endQuiz();
  quiz_box.classList.add("hide");
  results_box.classList.add("hide");
  que_count = 0;
  que_numb = 1;
  (userScore = 0), (widthValue = 0);
  showQuestions(que_count);
  que_count(que_numb);
}

function showResult() {
  results_box.classList.remove("hide");
  const score_text = results_box.querySelector(".score_text");
  if (userScore > 3) {
    let scoreTag =
      "<span> and congrats, you got <p>" +
      userScore +
      "</p> out of <p>" +
      questions.length +
      "</p></span>";
    score_text.innerHTML = scoreTag;
  } else if (userScore > 1) {
    let scoreTag =
      "<span> and okay, you got <p>" +
      userScore +
      "</p> out of <p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  } else {
    let scoreTag =
      "<span> and sorry, you got <p>" +
      userScore +
      "</p> out of <p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  }
}
function startTimer(time = timeValue) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time;
    time--;
    if (time < 9) {
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero;
    }
    if (time < 0) {
      timeText.textContent = "Times up";
      endQuiz();
    }
  }
}


