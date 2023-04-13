const start_button = document.querySelector('.start button');
const start_quiz_page = document.querySelector('.start_quiz_page')
const exit_button = buttons.querySelector( 'button','.exit')
const quiz = document.querySelector('.quiz')
const results_box = document.querySelector('.results_box')
const options_list = document.querySelector('.options_list')
const time_line = document.querySelector('header','.time_line')
const timeCount = document.querySelector('.timer','.timer_seconds')

start_button.onclick=()=>{
    start_quiz_page.classList.add("activeInfo");
    showQuestions(0);
    queCounter(1);
    startTimer(60);
    startTimerLine(0);

}

exit_button.onclick=()=>{
    start_quiz_page.classList.remove("activeInfo");
}

let timeValue = 60;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue =0;

const restart = results_box.querySelector('.buttons.restart');
const quit = results_box.querySelector('.buttons.quit');

restart.onclick = ()=>{
 quiz.classList,add("activeQuiz");
 results_box.classList.remove("activeResult");
 timeValue = 60;
 que_count = 0;
 que_numb = 1;
 userScore = 0,   
 widthValue = 0;
 showQuestions(que_count);
 que_count(que_numb);
 clearInterval(counter);
 clearInterval(counterLine);
 startTimer(timeValue)
 startTimerLine(widthValue)
next_btn.classList.remove("show");
}

quit_quiz.onclick = ()=>{
    window.location.reload();
}

const next_btn = document.querySelector('footer .next_btn');
const bottom_ques_counter = document.querySelector('footer .total_que')

next_btn.onclick = ()=>{
    if (que_count < queustions.length -1){
        que_count++;
        que_numb++;
        showQuestions (que_count);
        que_count (que_numb);
        clearInterval (counter)
        clearInterval(counterLine)
        startTimer(timeValue)
        next_btn.classList.remove("show")
    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        showResult();
    }
}

function showQuestions (index) {
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>' + questions[index].numb + "." + questions[index].question + '<span>';
    let option_tag = '<div class ="option"><span>' + questions[index].options[0] + '</span></div>'
    + '<div class="options"><span>' + questions[index].options[1] + '</span></div>'
    + '<div class="options"><span>' + questions[index].options[2] + '</span></div>'
    + '<div class="options"><span>' + questions[index].options[3] + '</span></div>'
    + '<div class="options"><span>' + questions[index].options[4] + '</span></div>'
    + '<div class="options"><span>' + questions[index].options[5] + '</span></div>';
}

function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correcAns = questions[que_count].answer;
    const allOptions = options_list.children.length;
    
    if (userAns == correcAns){
        userScore +=1;
        answer.classList.add('correct');
        console.log('Correct Answer!');
        console.log('Your correct answers =' + userScore);
        
    }else{
        answer.classList.add('Incorrect');
        console.log('Wrong answer');
        for(i=0; i< allOptions; i++){
            if(options_list.children[i].textContent==correcAns){}
        }

    }
}
 for(i=0; i < allOptions;i++ ) {
    options_list.children[i].classList.add('disabled');

 }
next_btn.classList.add('show');

function showResult(){
    start_quiz_page.classList.remove('activeInfo');
    quiz.classList.remove('activeQnfo');
    results_box.classList.add('active result');
    const score = results_box.querySelector('.score');
}