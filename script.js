const colors = ["red", "green", "blue", "purple", "black"];

const color = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  //get a random number between
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.trunc(Math.random() * 3 + 1);
}
