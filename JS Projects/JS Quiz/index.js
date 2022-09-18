var quizdata = [

    {
        question : "Which framwork is related to JavaScript",
        a:'.net',
        b:'flask',
        c:'react',
        d:'django',
        correct: 'c'

    },
    {
        question : "Which is not a programming language",
        a:'html',
        b:'python',
        c:'java',
        d:'javascript',
        correct: 'a'
    },
    {
        question : "Which is not a framework",
        a:'react',
        b:'javascript',
        c:'angular',
        d:'django',
        correct: 'b'
    },
    {
        question : "css stands for",
        a:'cascading style state',
        b:'cascading style sheet',
        c:'cascading sheet of style',
        d:'none',
        correct: 'b'
    },
    {
        question : "SPARK is written in",
        a:'Python',
        b:'Scala',
        c:'Java',
        d:'none',
        correct: 'b'
    }

]

var quiz = document.getElementById('quiz')
var answer = document.querySelectorAll('.answer')
var question = document.getElementById('question')
var option_a=document.getElementById('a_value')
var option_b=document.getElementById('b_value')
var option_c=document.getElementById('c_value')
var option_d=document.getElementById('d_value')

var submitbtn = document.getElementById('submit')

var currentQuestion = 0
var quizScore = 0

loadQuiz()

function loadQuiz()
{
    deselect()
    
    question.innerHTML = quizdata[currentQuestion].question
    option_a.innerText = quizdata[currentQuestion].a
    option_b.innerText = quizdata[currentQuestion].b
    option_c.innerText = quizdata[currentQuestion].c
    option_d.innerText = quizdata[currentQuestion].d

}
function deselect()
{
    answer.forEach(answer=>answer.checked=false)
}

submitbtn.addEventListener('click', ()=>{

    var selectedoption;

    answer.forEach(answer=>{

        if(answer.checked)
        {
            selectedoption=answer.id
        }
    })

    if(selectedoption==quizdata[currentQuestion].correct)
    {
        quizScore=quizScore+1

    }
    currentQuestion=currentQuestion+1
    
    if(currentQuestion==quizdata.length)
    {
        document.getElementById('quizdiv').innerHTML=`<h1>You have answer ${quizScore} correctly out of ${quizdata.length}</h1>`
    }
    else{
        loadQuiz()
    }
})
