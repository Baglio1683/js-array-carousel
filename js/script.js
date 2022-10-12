const listItem = ["img/01.jpg","img/02.jpg", "img/03.jpg","img/04.jpg","img/05.jpg"]

const rowImages = document.querySelector(".ms_col")

for(let i = 0 ; i < listItem.length ; i++){

   const imageRow = document.createElement("img")    
   imageRow.src = listItem[i]
   imageRow.classList.add("ms_item")
  
   if(i==0){
       imageRow.classList.add("ms_active")
    }

    rowImages.append(imageRow)

}

const rightImages = document.getElementsByClassName("ms_img-right")
const items = document.getElementsByClassName("ms_item")
console.log(items)

let posImage = 0 ; 

rightImages[posImage].classList.add("ms_opacity1")

const upAngle = document.querySelector(".ms_angleup")

const downAngle = document.querySelector(".ms_angledown")



upAngle.addEventListener("click", function(){

  

    if(posImage >=0 && posImage < items.length-1) {

       items[posImage].classList.remove("ms_active")
       rightImages[posImage].classList.remove("ms_opacity1")
       posImage++
       items[posImage].classList.add("ms_active")
       rightImages[posImage].classList.add("ms_opacity1")
    }
    else{

        items[posImage].classList.remove("ms_active")
        rightImages[posImage].classList.remove("ms_opacity1")
        posImage = 0
        items[posImage].classList.add("ms_active")
        rightImages[posImage].classList.add("ms_opacity1")
        
    }

}) 


downAngle.addEventListener("click", function(){


    if(posImage > 0 && posImage <= items.length-1){

         items[posImage].classList.remove("ms_active")
         rightImages[posImage].classList.remove("ms_opacity1")
         posImage--
         items[posImage].classList.add("ms_active")
         rightImages[posImage].classList.add("ms_opacity1")
     }
     else{
        items[posImage].classList.remove("ms_active")
        rightImages[posImage].classList.remove("ms_opacity1")
        posImage = items.length-1
        items[posImage].classList.add("ms_active")
        rightImages[posImage].classList.add("ms_opacity1")
     }


}) 








