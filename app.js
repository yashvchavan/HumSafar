import { readdata, writeUserData } from "./firebase.js";

Array.from(document.getElementsByTagName('input')).forEach((e,i)=>{
    e.addEventListener('keyup',(el)=>{
        if(e.value.length > 0){
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(180deg)";
        }else{
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(0deg)";
        }
    })
})
const explore = document.querySelector('.exp-btn')
explore.addEventListener(('click') , () => {
    let destination = document.querySelector('.js-destination').value;
    destination = destination.toLowerCase();
    window.location.href = `Europe/${destination}.html`
})




