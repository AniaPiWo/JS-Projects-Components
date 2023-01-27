const getRandomHexColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  }
  
  const button = document.querySelector(".change-color");
  const randomHex = document.querySelector(".color-BG");
  
  button.addEventListener("click", () => {
    randomHex.textContent = "#" + getRandomHexColor();
    document.body.style.backgroundColor = "#" + getRandomHexColor();
  });