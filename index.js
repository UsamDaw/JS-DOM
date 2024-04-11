/* Task 1
Source from: https://www.youtube.com/watch?v=pn3n9IFnV2I

const cToF = function(celsius) {
    const cTemp = celsius;
    const ToFahr = cTemp * (9 / 5) + 32;
    const msg = `${cTemp}\xB0C is ${ToFahr} \xB0F .`;
    return msg;
}

const fToC = function(fahrenheit) {
    const fTemp = fahrenheit;
    const fToCel = (fTemp - 32) * (5 / 9);
    const msg = `${fTemp}\xB0F is ${fToCel} \xB0C .`;
    return msg;
}
*/

/*
Task 2
document.getElementById("Number1").onclick = function() {
    document.getElementById("Number1").value = Math.floor(Math.random() * 10) + 1;
};

document.getElementById("Number2").onclick = function() {
    document.getElementById("Number2").value = Math.floor(Math.random() * 10) + 1;
};

document.getElementById("Resultat").onclick = function() {
    const number1 = document.getElementById("Number1").value;
    const number2 = document.getElementById("Number2").value;
    
    const outputMessage = number1 > number2 ? ` ${number1} er større enn ` + number2 :
                        number1 < number2 ? ` ${number2} er større enn ` + number1 :
                        " Begge tallene er like ";

    alert(outputMessage);
};
*/

/*
Task 3
Source from: https://www.youtube.com/watch?v=wP9-jVgkrDA
function PalindromChecker(palindrome) {
    for (var i = 0; i < palindrome.length / 2; i++) {
        if (palindrome[i] !== palindrome[palindrome.length - 1 - i]) {
            console.log('The word is not a palindrome.');
            return false;
        }
    }
    console.log('The word is a palindrome.');
    return true;
}

function checkPalindrome() {
    var inputText = document.getElementById('texte').value;
    if (inputText.trim() === '') {
        console.log('Please enter a word.');
        return;
    }
    PalindromChecker(inputText.toLowerCase());
}
*/

/* Task 4
function ColorChange1() {
	document.getElementById("Div1").style.background = ["red"];
}

function ColorChange2() {
	document.getElementById("Div2").style.background = ["red"];
}

function ColorChangeRandom() {
    const colors = ["red", "blue", "green", "yellow", "purple", "orange", "cyan", "magenta", "pink"];
    const something = Math.floor(Math.random() * colors.length);
    document.getElementById("Div3").style.background = colors[something];
}
*/

/* Task 5 
I gave up, it's is difficult to create.
*/

/* Task 6
function ColorChange() {
    const color = document.getElementById("Texte").value;
    document.body.style.backgroundColor = color;
}
*/