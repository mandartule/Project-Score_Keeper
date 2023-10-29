let p1Dis = document.querySelector('#p1Dis');
let p2Dis = document.querySelector('#p2Dis');
let upto = 3;
let p1Button = document.querySelector('#button1');
let p2Button = document.querySelector('#button2');
let option = document.querySelector('#upTo');
let reset = document.querySelector('#reset');
let gameOver = false;

option.addEventListener('change',function(){
    upto = parseInt(this.value);
    resetF();
    
})

function resetF() {
    p1Dis.innerText = 0;
    p2Dis.innerText = 0;
    gameOver = false;
    p1Dis.classList.remove('winner','looser');
    p2Dis.classList.remove('winner','looser');
} 


p1Button.addEventListener('click', () => {
    if (!gameOver) {
        p1Dis.innerText = parseInt(p1Dis.innerText) + 1;
        if (parseInt(p1Dis.innerText) === upto) {
            gameOver = true;
            p1Dis.classList.add('winner');
            p2Dis.classList.add('looser');
        }
    }
    
});

p2Button.addEventListener('click', () => {
    if (!gameOver) {
        p2Dis.innerText = parseInt(p2Dis.innerText) + 1;
        if (parseInt(p2Dis.innerText) === upto) {
            gameOver = true;
            p2Dis.classList.add('winner');
            p1Dis.classList.add('looser');
        }
    }
    
});

reset.addEventListener('click',resetF)



