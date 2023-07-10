console.log("Welcome to Tic Tac Toe")
let turn = "X"
let isgameover = false;

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

// Function to check for a win
const checkWin = ()=>{
    let spbox = document.getElementsByClassName('spbox');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((spbox[e[0]].innerText === spbox[e[1]].innerText) && (spbox[e[2]].innerText === spbox[e[1]].innerText) && (spbox[e[0]].innerText !== "") ){
            document.querySelector('.turntext').innerText = spbox[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
}

// Game Logic
// music.play()
let mainboxes = document.getElementsByClassName("mainbox");
Array.from(mainboxes).forEach(element =>{
    let spbox = element.querySelector('.spbox');
    element.addEventListener('click', ()=>{
        if(spbox.innerText === ''){
            spbox.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("turntext")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let spboxs = document.querySelectorAll('.spbox');
    Array.from(spboxs).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("turntext")[0].innerText  = "Turn for " + turn;
})

