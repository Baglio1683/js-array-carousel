const listItem = ["img/01.jpg","img/02.jpg", "img/03.jpg","img/04.jpg","img/05.jpg"]

const rowImages = document.querySelector(".row")

for(let i = 0 ; i < listItem.length ; i++){

   const imageRow = document.createElement("img")    
   imageRow.src = listItem[i]
   imageRow.classList.add("ms_item")
  
   if(i==0){
       imageRow.classList.add("ms_active")
    }

    rowImages.append(imageRow)

}



const items = document.getElementsByClassName("ms_item")
console.log(items)

let posImage = 0 ; 

const upAngle = document.querySelector(".ms_angleup")

const downAngle = document.querySelector(".ms_angledown")



upAngle.addEventListener("click", function(){

  

    if(posImage >=0 && posImage < items.length-1) {

       items[posImage].classList.remove("ms_active")
       posImage++
       items[posImage].classList.add("ms_active")
    }
    else{

        items[posImage].classList.remove("ms_active")
        posImage = 0
        items[posImage].classList.add("ms_active")
        
    }

}) 


downAngle.addEventListener("click", function(){


    if(posImage > 0 && posImage <= items.length-1){

         items[posImage].classList.remove("ms_active")
         posImage--
         items[posImage].classList.add("ms_active")
     }
     else{
        items[posImage].classList.remove("ms_active")
        posImage = items.length-1
        items[posImage].classList.add("ms_active")
     }


}) 



