var imgsList =Array.from(document.getElementsByClassName('img-item') )  // 6 imgas
var lightBoxContainer = document.querySelector('.lightBoxContainer')
var lightBoxItem = document.querySelector('.lightBoxItem')
var currentIndex = 0;     // to be global
var nextBtn = document.getElementById('next')
var iconClose = document.querySelector('#close')
var prevBtn = document.getElementById('prev')
for(var i=0;i<imgsList.length;i++){ 
    imgsList[i].addEventListener('click',function(e){
    currentIndex = imgsList.indexOf(e.target)       // local funcition
    // console.log(currentIndex)
    var imgSrc = e.target.getAttribute('src')
    lightBoxContainer.classList.replace('d-none','d-flex')
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`

    })
}
/////////////////////////////////////////////////////////
function nextSlide(){
currentIndex++; //2
if (currentIndex==imgsList.length){
    currentIndex=0
}
var imgSrc = imgsList[currentIndex].getAttribute('src')
lightBoxItem.style.backgroundImage = `url(${imgSrc})`
}
nextBtn.addEventListener('click',nextSlide)
//////////////////////////////////////////////////////
function prevSlide(){
    currentIndex--;
    if (currentIndex == -1){
        currentIndex=imgsList.length -1
    }
    var imgSrc = imgsList[currentIndex].getAttribute('src')
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`
}
prevBtn.addEventListener('click',prevSlide)
////////////////////////////////////////////////////////
// close
iconClose.addEventListener('click',function (){
    lightBoxContainer.classList.replace('d-flex','d-none')
})
//////////////////////////////////////////////////////////
// keyboard

document.addEventListener('keydown',function(e){
   if (e.key=='ArrowRight'){
    nextSlide()
   }
   else if (e.key=='ArrowLeft'){
    prevSlide()
   }
   else if (e.key=="Escape"){
    lightBoxContainer.classList.replace('d-flex','d-none') 
   }
})