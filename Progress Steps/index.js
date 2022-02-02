const NEXT = document.getElementById("next");
const PREV = document.getElementById("prev");
const PROGRESS =  document.getElementById("progress");
const CIRCLES = document.querySelectorAll(".circle");

let current = 1

NEXT.addEventListener("click",()=>{
    
    current = current + 1;
    if(current > CIRCLES.length){
        current = CIRCLES.length
    }
    console.log(current)

    update();
});

PREV.addEventListener("click",()=>{
    current--
    if(current < 1 ){
        current = CIRCLES.length
    }
    console.log(current)
    update();
});

const update = () => {
    CIRCLES.forEach((circle,idx)=>{
        if(idx < current){
            circle.classList.add("active")
        }
        else{
            circle.classList.remove("active")
        }
    })

    const ACTIVES = document.querySelectorAll(".active")

    PROGRESS.style.width = `${((ACTIVES.length - 1) / (CIRCLES.length - 1))* 100}` + "%"

    if(current === 1){
        PREV.disabled = true;
    }
    else if(current == CIRCLES.length){
        NEXT.disabled = true;
    }
    else{
        NEXT.disabled = false;
        PREV.disabled = false 
    }

}