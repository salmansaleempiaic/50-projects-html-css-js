const PANELS = document.querySelectorAll(".panel")

PANELS.forEach((panel)=>{
    panel.addEventListener("mouseover",()=>{
        removeActiveClass();
        panel.classList.add("active")
    })
})

const removeActiveClass = () => {
    PANELS.forEach((panel)=>{
        panel.classList.remove("active")
    })
}