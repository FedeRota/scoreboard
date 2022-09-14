let score1 = document.getElementById("score1")
let scoreA = 0
let scoreB = 0
let score2 = document.getElementById("score2")
function btn1(){
    scoreA += 1
    score1.textContent = scoreA        
}
function btn2(){
    scoreA += 2
    score1.textContent = scoreA        
}
function btn3(){
    scoreA += 3
    score1.textContent = scoreA        
}
function btn1a(){
    scoreB += 1
    score2.textContent = scoreB       
}
function btn2b(){
    scoreB += 2
    score2.textContent = scoreB       
}
function btn3c(){
    scoreB += 3
    score2.textContent = scoreB       
}
function newgame(){
    score1.textContent = 0
    score2.textContent = 0
    scoreA= 0
    scoreB= 0
}