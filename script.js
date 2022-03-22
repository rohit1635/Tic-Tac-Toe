console.log("Welcome to Tic Tac Toe")
let turnaudio = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;

const changeturn = ()=>{
    return turn === "X" ? "0": "X"
}

const checkwin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            isgameover= true
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            document.querySelector('.img').getElementsByTagName('img')[0].style.width= "300px"
            reset.innerText= "Play again";
        }
    })
}

const checkdraw = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let draw = [[0,1,2,3,4,5,6,7,8]]
    draw.forEach(e =>{
        if((boxtext[e[0]].innerText !== "") && (boxtext[e[1]].innerText !== "") && (boxtext[e[2]].innerText !== "") && (boxtext[e[3]].innerText !== "") && (boxtext[e[4]].innerText !== "") && (boxtext[e[5]].innerText !== "") && (boxtext[e[6]].innerText !== "") && (boxtext[e[7]].innerText !== "") && (boxtext[e[8]].innerText !== "")){
            isgameover= true
            document.getElementsByClassName("info")[0].innerText = "Match Draw";
            document.querySelector('.img').getElementsByTagName('img')[1].style.width= "250px"
        }
    })

}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            if(isgameover){
                boxtext.innerText= '';
            }
            else{
            boxtext.innerText = turn;
            turn = changeturn();
            turnaudio.play();
            checkwin();
            checkdraw();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
            }
        }
        }
    })
})

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText= ""
    });
    turn = "X";
    reset.innerText= "Reset";
    isgameover= false
    document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
    document.querySelector('.img').getElementsByTagName('img')[0].style.width= "0px"
    document.querySelector('.img').getElementsByTagName('img')[1].style.width= "0px"
})