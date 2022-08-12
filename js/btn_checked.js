let vege = document.querySelectorAll(".vege");
let jam = document.querySelectorAll(".jam");
let btns = document.querySelectorAll(".btn");
let fruit = document.getElementById("fruit")

window.addEventListener("load",function(){
    function show() {
        if(document.getElementById == fruit){
            jam.classList.add("cardHidden");
        }
    }
    
    for(i=0; i < btns.length ; i++){
        let btns = document.querySelectorAll(".btn");
        btns[i].onclick = show;
    }

})