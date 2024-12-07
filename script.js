console.log("Welcome to Tic tec Toe")
let music = new Audio("music.mp3")
let turn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn_X = "X" 
let isgameover = false;

const changeTurn = ()=>{
    return turn_X === "X"? "0":"X"
}

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
   let wins = [
    [0,1,2,5,5,180],
    [3,4,5,5,15,180],
    [6,7,8,5,25,180],
    [0,3,6,-5,15,90],
    [1,4,7,5,15,90],
    [2,5,8,15,15,90],
    [0,4,8,5,15,45],
    [2,4,6,5,15,135],
   ]
   wins.forEach(e =>{
     if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
        document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won "
        isgameover = true;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "150px";
         document.querySelector('.line').style.width = '20vw';
        document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(9${e[5]}deg)`
     } 
   })
}

// game logic
music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=> {
        if( boxtext.innerText ===''){
            boxtext.innerText = turn_X,
            turn_X = changeTurn();
            turn.play();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName('info')[0].innerText = " Turn for " + turn_X;
            }
        }
    })
})


Reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn_X = "X"
    isgameover = false
    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn_X;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    document.querySelector('.line').style.width = '0vw';
})