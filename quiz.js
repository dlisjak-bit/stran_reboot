// quiz
const startButton = document.getElementById('start');
const quizContainer = document.getElementById('quiz');
const scoreContainer = document.getElementById('score');
const submitButton = document.getElementById('submit');
var enterPressed = false;
var currentQuestions;
var currentQuestion;
var currentAnswer;
var scoreNegative;
var scorePositive;
var currentIndex;
var quizActive = false;
var justAnswered = false;

//Read answer if quiz is active on enter press
let input = document.getElementById('answerBar');
    console.log(currentAnswer);
    input.addEventListener("keyup", function(event) {
        if((event.keyCode === 13) && quizActive) {
            event.preventDefault();
                currentAnswer = input.value;
                console.log(currentAnswer);
                input.value = "";
                nextQuestion();
        }
    });


//Start or restart quiz
function resetQuiz(){
    currentQuestions = []
    for(i=0; i<questions.length; i++){
        currentQuestions.push(questions[i]);
    }
    scoreNegative = 0;
    scorePositive = 0;
    document.getElementById('score').innerHTML = "R:" + scorePositive.toString() + " W:" + scoreNegative.toString();
    currentIndex = Math.floor(Math.random()*currentQuestions.length);
    console.log(currentQuestions);
    currentQuestion = currentQuestions[currentIndex];
    console.log(currentQuestion.question)
    document.getElementById('quiz').innerHTML = currentQuestion.question;
    quizActive = true;
}

//Check answer, go to next question
function nextQuestion(){
    if(currentAnswer == currentQuestion.correctAnswer){
        //celeb
        /*for(i=0; i<4; i++){
            document.getElementById('answerBar').style['background-color'] = "white" ;
            wait(500);
            console.log('here')
            document.getElementById('answerBar').style['background-color'] = "transparent";
            wait(500);
        }*/
        scorePositive +=1;
    }
    else{
        //doodoosound
        scoreNegative +=1;
    }
    document.getElementById('score').innerHTML = "R:" + scorePositive.toString() + " W:" + scoreNegative.toString();
    document.getElementById('prevAnswer').innerHTML = "Previous Q: " + currentQuestion.question + " - " +currentQuestion.correctAnswer;
    show_image(currentQuestion.correctAnswer);
    currentQuestions.splice(currentIndex, 1);
    if(currentQuestions.length>0){
        currentIndex = Math.floor(Math.random()*currentQuestions.length);
        currentQuestion = currentQuestions[currentIndex];
        document.getElementById('quiz').innerHTML = currentQuestion.question;    }
    else{
        console.log("hej");
        // Congratulations redirect
        window.location = '/stran_reboot/index.html';
    }
}

function wait(ms)
{
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
}

function show_image(constellation) {
    constellation = constellation.toUpperCase();
    source = "https://www.iau.org/static/public/constellations/gif/" + constellation + ".gif";
    document.getElementById("map").src = source;
}

/*ideas:
show map for previous object
css score, wrong/right answer

*/

const questions = [             //build separate file? maybe not
  {
      question: "M1",
      correctAnswer: "Tau"
  },
  {
      question: "M2",
      correctAnswer: "Aqr"
  },
  {
      question: "M3",
      correctAnswer: "CVn"
  },
  {
      question: "M4",
      correctAnswer: "Sco"
  },
  {
      question: "M5",
      correctAnswer: "Ser"
  },
  {
      question: "M6",
      correctAnswer: "Sco"
  },
  {
      question: "M7",
      correctAnswer: "Sco"
  },
  {
      question: "M8",
      correctAnswer: "Sgr"
  },
  {
      question: "M9",
      correctAnswer: "Oph"
  },
  {
      question: "M10",
      correctAnswer: "Oph"
  },
  {
      question: "M11",
      correctAnswer: "Sct"
  },
  {
      question: "M12",
      correctAnswer: "Oph"
  },
  {
      question: "M13",
      correctAnswer: "Her"
  },
  {
      question: "M14",
      correctAnswer: "Oph"
  },
  {
      question: "M15",
      correctAnswer: "Peg"
  },
  {
      question: "M16",
      correctAnswer: "Ser"
  },
  {
      question: "M17",
      correctAnswer: "Sgr"
  },
  {
      question: "M18",
      correctAnswer: "Sgr"
  },
  {
      question: "M19",
      correctAnswer: "Oph"
  },
  {
      question: "M20",
      correctAnswer: "Sgr"
  },
  {
      question: "M21",
      correctAnswer: "Sgr"
  },
  {
      question: "M22",
      correctAnswer: "Sgr"
  },
  {
      question: "M23",
      correctAnswer: "Sgr"
  },
  {
      question: "M24",
      correctAnswer: "Sgr"
  },
  {
      question: "M25",
      correctAnswer: "Sgr"
  },
  {
      question: "M26",
      correctAnswer: "Sct"
  },
  {
      question: "M27",
      correctAnswer: "Vul"
  },
  {
      question: "M28",
      correctAnswer: "Sgr"
  },
  {
      question: "M29",
      correctAnswer: "Cyg"
  },
  {
      question: "M30",
      correctAnswer: "Cap"
  },
  {
      question: "M31",
      correctAnswer: "And"
  },
  {
      question: "M32",
      correctAnswer: "And"
  },
  {
      question: "M33",
      correctAnswer: "Tri"
  },
  {
      question: "M34",
      correctAnswer: "Per"
  },
  {
      question: "M35",
      correctAnswer: "Gem"
  },
  {
      question: "M36",
      correctAnswer: "Aur"
  },
  {
      question: "M37",
      correctAnswer: "Aur"
  },
  {
      question: "M38",
      correctAnswer: "Aur"
  },
  {
      question: "M39",
      correctAnswer: "Cyg"
  },
  {
      question: "M40",
      correctAnswer: "UMa"
  },
  {
      question: "M41",
      correctAnswer: "CMa"
  },
  {
      question: "M42",
      correctAnswer: "Ori"
  },
  {
      question: "M43",
      correctAnswer: "Ori"
  },
  {
      question: "M44",
      correctAnswer: "Cnc"
  },
  {
      question: "M45",
      correctAnswer: "Tau"
  },
  {
      question: "M46",
      correctAnswer: "Pup"
  },
  {
      question: "M47",
      correctAnswer: "Pup"
  },
  {
      question: "M48",
      correctAnswer: "Hya"
  },
  {
      question: "M49",
      correctAnswer: "Vir"
  },
  {
      question: "M50",
      correctAnswer: "Mon"
  },
  {
      question: "M51",
      correctAnswer: "CVn"
  },
  {
      question: "M52",
      correctAnswer: "Cas"
  },
  {
      question: "M53",
      correctAnswer: "Com"
  },
  {
      question: "M54",
      correctAnswer: "Sgr"
  },
  {
      question: "M55",
      correctAnswer: "Sgr"
  },
  {
      question: "M56",
      correctAnswer: "Lyr"
  },
  {
      question: "M57",
      correctAnswer: "Lyr"
  },
  {
      question: "M58",
      correctAnswer: "Vir"
  },
  {
      question: "M59",
      correctAnswer: "Vir"
  },
  {
      question: "M60",
      correctAnswer: "Vir"
  },
  {
      question: "M61",
      correctAnswer: "Vir"
  },
  {
      question: "M62",
      correctAnswer: "Oph"
  },
  {
      question: "M63",
      correctAnswer: "CVn"
  },
  {
      question: "M64",
      correctAnswer: "Com"
  },
  {
      question: "M65",
      correctAnswer: "Leo"
  },
  {
      question: "M66",
      correctAnswer: "Leo"
  },
  {
      question: "M67",
      correctAnswer: "Cnc"
  },
  {
      question: "M68",
      correctAnswer: "Hya"
  },
  {
      question: "M69",
      correctAnswer: "Sgr"
  },
  {
      question: "M70",
      correctAnswer: "Sgr"
  },
  {
      question: "M71",
      correctAnswer: "Sge"
  },
  {
      question: "M72",
      correctAnswer: "Aqr"
  },
  {
      question: "M73",
      correctAnswer: ""
  },
  {
      question: "M74",
      correctAnswer: "Aqr"
  },
  {
      question: "M75",
      correctAnswer: "Sgr"
  },
  {
      question: "M76",
      correctAnswer: "Per"
  },
  {
      question: "M77",
      correctAnswer: "Cet"
  },
  {
      question: "M78",
      correctAnswer: "Ori"
  },
  {
      question: "M79",
      correctAnswer: "Lep"
  },
  {
      question: "M80",
      correctAnswer: "Sco"
  },
  {
      question: "M81",
      correctAnswer: "UMa"
  },
  {
      question: "M82",
      correctAnswer: "UMa"
  },
  {
      question: "M83",
      correctAnswer: "Hya"
  },
  {
      question: "M84",
      correctAnswer: "Vir"
  },
  {
      question: "M85",
      correctAnswer: "Com"
  },
  {
      question: "M86",
      correctAnswer: "Vir"
  },
  {
      question: "M87",
      correctAnswer: "Vir"
  },
  {
      question: "M88",
      correctAnswer: "Com"
  },
  {
      question: "M89",
      correctAnswer: "Vir"
  },
  {
      question: "M90",
      correctAnswer: "Vir"
  },
  {
      question: "M91",
      correctAnswer: "Com"
  },
  {
      question: "M92",
      correctAnswer: "Her"
  },
  {
      question: "M93",
      correctAnswer: "Pup"
  },
  {
      question: "M94",
      correctAnswer: "CVn"
  },
  {
      question: "M95",
      correctAnswer: "Leo"
  },
  {
      question: "M96",
      correctAnswer: "Leo"
  },
  {
      question: "M97",
      correctAnswer: "UMa"
  },
  {
      question: "M98",
      correctAnswer: "Com"
  },
  {
      question: "M99",
      correctAnswer: "Com"
  },
  {
      question: "M100",
      correctAnswer: "Com"
  },
  {
      question: "M101",
      correctAnswer: "UMa"
  },
  {
      question: "M102",
      correctAnswer: "Dra"
  },
  {
      question: "M103",
      correctAnswer: "Cas"
  },
  {
      question: "M104",
      correctAnswer: "Vir"
  },
  {
      question: "M105",
      correctAnswer: "Leo"
  },
  {
      question: "M106",
      correctAnswer: "CVn"
  },
  {
      question: "M107",
      correctAnswer: "Oph"
  },
  {
      question: "M108",
      correctAnswer: "UMa"
  },
  {
      question: "M109",
      correctAnswer: "UMa"
  },
  {
      question: "M110",
      correctAnswer: "And"
  }
];
