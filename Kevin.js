const questions = [
 {
question: "Which country has the most vending machines in the world?",
answers:[
 {text: "Japan", correct: true},
 {text: "South Korea", correct: false},
 {text: "USA", correct: false},
  ]
 },
{
question: "Which star is the nearest to our solar system?",
answers:[
 {text: "Betelgeuse", correct:  false},
 {text: "Rigel", correct: false},
 {text: "Proxima Centauri", correct: true},
]
},
{
question: "How much bones do sharks have?",
answers:[
 {text: "327", correct: false},
 {text: "206", correct: false},
 {text: "0", correct: true},
]
},
{
question: "Who wrote Romeo and Juliet?",
answers:[
 {text: "William Shakespeare", correct: true},
 {text: "Leonardo da Vinci", correct: false},
 {text: "Bartolomeu Dias", correct: false},
]
},
{
question: "What is the highest level of the biological organization?",
answers:[
 {text: "Ecosystem", correct: false},
 {text: "Community", correct: false},
 {text: "Biosphere", correct: true},
]
},
{
question: "3x+1=2x+5 what is x?",
answers:[
 {text: "x=4", correct: true},
 {text: "x=3", correct: false},
 {text: "x=16", correct: false},
]
}
];

document.addEventListener("DOMContentLoaded", function() {
    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("Answerbtns");
    const nextButton = document.getElementById("next-bt");

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        nextButton.style.display = "none";
        showQuestion();
    }

    function showQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        answerButtons.innerHTML = "";

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.textContent = answer.text;
            button.classList.add("bt");
            button.addEventListener("click", () => selectAnswer(answer));
            answerButtons.appendChild(button);
        });
    }

    function selectAnswer(selectedAnswer) {
        const correctAnswer = questions[currentQuestionIndex].answers.find(answer => answer.correct);

        const buttons = answerButtons.getElementsByTagName("button");
        Array.from(buttons).forEach(button => {
            button.disabled = true;
            if (button.textContent === correctAnswer.text) {
                button.style.backgroundColor = "green";
            } else {
                button.style.backgroundColor = "red";
            }
        });

        if (selectedAnswer.correct) {
            score++;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            nextButton.style.display = "block";
        } else {
            alert("Quiz finished! Your score is: " + score);
        }
    }

    nextButton.addEventListener("click", () => {
        showQuestion();
    });

    startQuiz();
});
