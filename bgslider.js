const body = document.body
const top2 = document.querySelectorAll('.top')
const left =document.querySelector('.left')
const right =document.querySelector('.right')

let activeslide = 0

setbgbody()
right.addEventListener('click',() =>{
    activeslide++;
    if(activeslide > top2.length -1){
        activeslide=0;
    }
    setbgbody();
    setActiveslide();
})
left.addEventListener('click',() =>{
    activeslide--;
    if(activeslide < 0){
        activeslide= top2.length -1;
    }
    setbgbody();
    setActiveslide();
})

function setbgbody(){
    body.style.backgroundImage = top2[activeslide].style.backgroundImage;
}

function setActiveslide(){
    top2.forEach((tops) =>{
        tops.classList.remove('active');
    })

    top2[activeslide].classList.add('active');

}