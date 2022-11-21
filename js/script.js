let randomNumber = Math.round(Math.random() * 2);
//h1 element
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const result = document.querySelector("#result");
//spelknappar
const rock = document.querySelector("#rock")
const sicssor = document.querySelector("#sicssor")
const paper = document.querySelector("#paper")
const inputButton = document.querySelector("#inputbutton")


//Knapp meddelande
inputButton.addEventListener('click', pNamn);
function pNamn() {
    const el = document.createElement('h1');
    document.body.appendChild(el);
    const textinput = document.querySelector('#nameinput')
    el.innerText = textinput.value
    el.style.textAlign = "center"
    el.style.color = "red"
    el.style.fontFamily = "Arial, Helvetica, sans-serif";
}
//Spel poäng

let pscore = 0;
let cscore = 0;



//Spel alternativ

rock.addEventListener('click', sten)
function sten(event) {
    randomNumber = Math.round(Math.random() * 2);
    spelare = event.target.innerText
    const el = document.createElement('h1');
    document.body.appendChild(el);
    player.innerText = "Player:" + spelare

    if (randomNumber == 0) {
        computer.innerText = " Computer: STEN "
        result.innerText = " Result: LIKA"

    }

    else if (randomNumber == 1) {
        computer.innerText = " Computer: PÅSE "
        result.innerText = " Result: DATORN VINNER"
        cscore++
    }

    else if (randomNumber == 2) {
        computer.innerText = " Computer: SAX "
        result.innerText = " Result: SPELARE VINNER"
        pscore++


    }
    document.querySelectorAll("h2")[0].innerText = "Player:" + pscore
    document.querySelectorAll("h2")[1].innerText = "Computer:" + cscore

    setTimeout (function(){
        if(pscore==3) {
            pscore=0
            alert("Grattis du vann!")
            location.reload(true)
        }
        if(cscore==3) {
            cscore=0
            alert("Datorn vann!")
            location.reload(true)
        }
    },30)

}

sicssor.addEventListener('click', sax)
function sax(event) {
    randomNumber = Math.round(Math.random() * 2);
    spelare = event.target.innerText
    const el = document.createElement('h1');
    document.body.appendChild(el);
    player.innerText = "Player:" + spelare;

    if (randomNumber == 0) {
        computer.innerText = " Computer: STEN "
        result.innerText = " Result: DATORN VINNER"
        cscore++
    }

    else if (randomNumber == 1) {
        computer.innerText = " Computer: PÅSE "
        result.innerText = " Result: SPELARE VINNER"
        pscore++;
    }

    else if (randomNumber == 2) {
        computer.innerText = " Computer: SAX "
        result.innerText = " Result: LIKA"

    }
    document.querySelectorAll("h2")[0].innerText = "Player:" + pscore
    document.querySelectorAll("h2")[1].innerText = "Computer:" + cscore

    setTimeout (function(){
        if(pscore==3) {
            pscore=0
            alert("Grattis du vann!")
            location.reload(true)
        }
        if(cscore==3) {
            cscore=0
            alert("Datorn vann!")
            location.reload(true)
        }
    },30)

}
paper.addEventListener('click', papper)
function papper(event) {
    randomNumber = Math.round(Math.random() * 2);
    spelare = event.target.innerText;
    const el = document.createElement('h1');
    document.body.appendChild(el);
    player.innerText = "Player:" + spelare;

    if (randomNumber == 0) {
        computer.innerText = " Computer: STEN "
        result.innerText = " Result: SPELARE VINNER"
        pscore++;
    }

    else if (randomNumber == 1) {
        computer.innerText = " Computer: PÅSE "
        result.innerText = " Result: LIKA"

    }

    else if (randomNumber == 2) {
        computer.innerText = " Computer: SAX "
        result.innerText = " Result: DATORN VINNER"
        cscore++

    }
    document.querySelectorAll("h2")[0].innerText = "Player:" + pscore
    document.querySelectorAll("h2")[1].innerText = "Computer:" + cscore

    setTimeout (function(){
        if(pscore==3) {
            pscore=0
            alert("Grattis du vann!")
            location.reload(true)
        }
        if(cscore==3) {
            cscore=0
            alert("Datorn vann!")
            location.reload(true)
        }
    },30)
   

}












