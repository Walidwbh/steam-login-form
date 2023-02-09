//chenge the color of label when focusing on an input
const inputs = document.querySelectorAll(".content .form input:not(:last-of-type)");
inputs.forEach((element)=>{
    element.addEventListener(("focus"),(event)=>{
        event.target.previousElementSibling.classList.add("active")
    })
    element.addEventListener(("blur"),(event)=>{
        event.target.previousElementSibling.classList.remove("active")
    })
})