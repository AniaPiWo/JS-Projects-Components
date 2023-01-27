const ghostBox = document.querySelector(".ghost-box")
const ghostBoxPos = ghostBox.getBoundingClientRect();

console.log(ghostBoxPos);

const moveGhost = e => {

   const ghost = document.createElement('div')
   ghost.classList.add("ghost")
   ghostBox.append(ghost)

   ghost.style.top = e.clientY - ghostBoxPos.y + "px"
   ghost.style.left = e.clientX - ghostBoxPos.x + "px"
   
   setTimeout(() => {
    ghostBox.removeChild(ghost)
   }, 1000)
}

ghostBox.addEventListener("mousemove", e => moveGhost(e))