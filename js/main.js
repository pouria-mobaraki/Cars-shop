
// let circleBtn =document.querySelectorAll('#bt')
let slideIndex =1 
function setSlides(input,index){
slideIndex=index
let item = document.querySelector(`#${input}`)
let slides = [...document.querySelector('.slides').children]

slides.forEach(element => {
    element.classList.remove('active')
});
item.classList.add('active')
}

setInterval(elem=>{
    slideIndex =slideIndex +1
    if(slideIndex===4){
        slideIndex=1
    }
    setSlides(`slide${slideIndex}`,slideIndex)
},4000)

// count time//

let remainingTime = 86400
function countTime(){
if(remainingTime===0)return;
let h = Math.floor(remainingTime/3600)
let m = Math.floor((remainingTime%3600)/60)
let s = (remainingTime%3600)%60

document.querySelector('#hours').innerHTML = h
document.querySelector('#minutes').innerHTML = m
document.querySelector('#seconds').innerHTML = s
}

setInterval(()=>{
    remainingTime--
    countTime()
},1000)


