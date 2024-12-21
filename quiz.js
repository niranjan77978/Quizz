let options = document.querySelectorAll(".btn");
let next = document.querySelector("#next");
let ques = document.querySelector("#ques");
let opt1 = document.querySelector("#one");
let opt2 = document.querySelector("#two");
let opt3 = document.querySelector("#three");
let opt4 = document.querySelector("#four");
let scoreDisp = document.querySelector("#score");

let quest = [
    {
        question: "1. What is the capital of France? ",
        answer: "Paris",
        option1: "Rome",
        option2: "London",
        option3: "Paris",
        option4: "Berlin"
    },
    {
        question: "2. Which planet in our solar system is known as the 'Evening Star'? ",
        answer: "Venus",
        option1: "Mars",
        option2: "Venus",
        option3: "Jupiter",
        option4: "Mercury"
    },
    {
        question: "3. What is the main ingredient in guacamole? ",
        answer: "Avocado",
        option1: "Tomato",
        option2: "Avocado",
        option3: "Cucumber",
        option4: "Lettuce"
    },
    {
        question: "4. How many continents are there on Earth? ",
        answer: "Seven",
        option1: "Five",
        option2: "Six",
        option3: "Seven",
        option4: "Eight"
    },
    {
        question: "5. What is the chemical symbol for water? ",
        answer: "H2O",
        option1: "O2",
        option2: "H2O",
        option3: "CO2",
        option4: "H2"
    },
    {
        question: "6. Which animal is known as the 'King of the Jungle'? ",
        answer: "Lion",
        option1: "Elephant",
        option2: "Tiger",
        option3: "Lion",
        option4: "Leopard"
    },
    {
        question: "7. Which country is famous for its maple syrup? ",
        answer: "Canada",
        option1: "USA",
        option2: "Sweden",
        option3: "Canada",
        option4: "Norway"
    },
    {
        question: "8. What is the boiling point of water at sea level in Celsius? ",
        answer: "100°C",
        option1: "50°C",
        option2: "100°C",
        option3: "150°C",
        option4: "200°C"
    },
    {
        question: "9. Which country is home to the Great Wall? ",
        answer: "China",
        option1: "India",
        option2: "Japan",
        option3: "China",
        option4: "South Korea"
    },
    {
        question: "10. What is the official language of Brazil? ",
        answer: "Portuguese",
        option1: "Spanish",
        option2: "Portuguese",
        option3: "French",
        option4: "English"
    }
];




let questIdx = 0;
let score  = 0;
var selected = null;




//question 1 initialization
function loadQuest() {
    ques.innerHTML = quest[questIdx].question;
    opt1.innerHTML = quest[questIdx].option1;
    opt2.innerHTML = quest[questIdx].option2;
    opt3.innerHTML = quest[questIdx].option3;
    opt4.innerHTML = quest[questIdx].option4;

    options.forEach(option =>{
        option.style.backgroundColor = "";
        option.disabled = false;
        option.classList.remove("correct","incorrect");
    });
    selected = null;
}


options.forEach(option => {
    option.addEventListener("click", function() {
        options.forEach(opt => {
            opt.style.backgroundColor = ""; 
        });
        option.style.backgroundColor = "blue"; 

        if (option.innerHTML === quest[questIdx].answer) {
            option.classList.add("correct");
        } else {
            option.classList.add("incorrect");
            options.forEach(option=>{
                if(option.innerHTML === quest[questIdx].answer){
                    option.classList.add("correct");
                };
                
            });
        }

        options.forEach(opt => opt.disabled = true);

        selected = option.innerHTML;
    });
});

next.addEventListener("click", function() {
    if (!selected) {
        alert("Please select an option before proceeding!");
        return;
    }

    if (selected === quest[questIdx].answer) {
        score++;
    }

    questIdx++;
    if (questIdx < quest.length) {
        loadQuest();
    } else {
        scoreDisp.innerHTML = `Your Score: ${score}/${quest.length}`;
        questIdx = 0;
        score = 0;
        loadQuest();
        setTimeout(()=>{
            scoreDisp.innerHTML ="";
        },10000);
    }
});


loadQuest();
























// quest.forEach(function(elem,idx){
//     ques.innerHTML = quest[questIdx].question;
//     opt1.innerHTML = quest[0].option1;
//     opt2.innerHTML = quest[0].option2;
//     opt3.innerHTML = quest[0].option3;
//     opt4.innerHTML = quest[0].option4;

//     next.addEventListener("click",function(){
//         idx++;
//     })
// });