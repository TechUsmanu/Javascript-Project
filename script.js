const questions = [
    {
    question: 'what is largest animal in the world?',
    answers: [
        {text: 'shark',  correct: false},
        {text: 'Blue whale',  correct: true},
        {text: 'Elephant',  correct: false},
        {text: 'Giraffe',  correct: false},
    ]

    },
    
    {
        question: 'what is largest city  in the Nigeria?',
        answers: [
            {text: 'Kano',  correct: true},
            {text: 'Lagos',  correct: false},
            {text: 'Kaduna',  correct: false},
            {text: 'Abuja',  correct: false},
        ]
    },
    {
        question: 'what is the name of the current president in Nigeria?',
        answers: [
            {text: 'President Bola Muhammad Buhari',  correct: false},
            {text: 'President Bola Ahmad Tinubu',  correct: true},
            {text: 'President Bola Ahmad Tinubu',  correct: false},
            {text: 'President Bola Ahmad Tinubu',  correct: false},
        ]
    },
    {
        question: 'what is largest animal in the world?',
        answers: [
            {text: 'shark',  correct: false},
            {text: 'Blue whale',  correct: true},
            {text: 'Elephant',  correct: false},
            {text: 'Giraffe',  correct: false},
        ]
    },
    

];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        
    });

    function resetState (){
        nextButton.style.display = 'none';
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectedBtn.classList.add('correct'); 
        score++; 
    }else{
        selectedBtn.classList.add('incorrect');
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct')
        }
        button.disabled = true;
    });

    nextButton.style.display = 'block';
}

function showScore() {
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML='play Again';
    nextButton.style.display = 'block';
}


// function handleNextButton(){
// currentQuestionIndex++;
// if (currentQuestionIndex < questions.length) {
//     showQuestion();
// }else{
//     showScore();
// }
// }
function showScore(){
    resetState();
    questionElement.innerHTML = `you score ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}



function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();  
    } else{
        showScore();
    }
};

nextButton.addEventListener('click', ()=>{
 if (currentQuestionIndex < questions.length) {
      handleNextButton();
 }else{
    startQuiz();
 }
});
startQuiz();
