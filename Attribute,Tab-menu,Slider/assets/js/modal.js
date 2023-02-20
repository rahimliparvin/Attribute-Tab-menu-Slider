"use strict";


let btnLog = document.querySelector(".box .log");

btnLog.addEventListener("click",function(){

    let modal = this.nextElementSibling;

    if (modal.classList.contains("hidden-modal")) {
        modal.classList.remove("hidden-modal");
    }
    else{
        modal.classList.add("hidden-modal");
    }

})
