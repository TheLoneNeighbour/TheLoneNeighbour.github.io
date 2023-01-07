const cheesePerClick = 1;
let cheeseCount = 0;
let cheesePerSecond = 0;
let pasteurizationLevel = 0;
let agingLevel = 0;
let helpers = 0;
const pasteurizationBasePrice = 100;
const agingBasePrice = 200;
const apprenticeBasePrice = 500;
let pasteurizationPrice = pasteurizationBasePrice;
let agingPrice = agingBasePrice;
let apprenticePrice = apprenticeBasePrice;

const makeCheeseButton = document.getElementById("make-cheese-button");
const pasteurizationButton = document.getElementById("pasteurization-button");
const agingButton = document.getElementById("aging-button");
const apprenticeButton = document.getElementById("apprentice-button");
const saveGameButton = document.getElementById("save-game-button");
const loadGameButton = document.getElementById("load-game-button");
const resetGameButton = document.getElementById("reset-game-button");
const pasteurizationLevelElement = document.getElementById("pasteurization-level");
const pasteurizationPriceElement = document.getElementById("pasteurization-price");
const agingLevelElement = document.getElementById("aging-level");
const agingPriceElement = document.getElementById("aging-price");
const apprenticesElement = document.getElementById("apprentices");
const apprenticePriceElement = document.getElementById("apprentice-price");
const cheeseCountElement = document.getElementById("cheese-count");
const cheesePerSecondElement = document.getElementById("cheese-per-second");

makeCheeseButton.addEventListener("click", () => {
  cheeseCount += cheesePerClick;
  updateCheeseCount();
});

pasteurizationButton.addEventListener("click", () => {
  if (cheeseCount >= pasteurizationPrice) {
    cheeseCount -= pasteurizationPrice;
    pasteurizationLevel += 1;
    pasteurizationPrice = Math.ceil(pasteurizationPrice * 1.1);
    updatePasteurization();
    updateCheeseCount();
  }
});

agingButton.addEventListener("click", () => {
  if (cheeseCount >= agingPrice) {
    cheeseCount -= agingPrice;
    agingLevel += 1;
    agingPrice = Math.ceil(agingPrice * 1.1);
    updateAging();
    updateCheeseCount();
  }
});

apprenticeButton.addEventListener("click", () => {
  if (cheeseCount >= apprenticePrice) {
    cheeseCount -= apprenticePrice;
    helpers += 1;
    apprenticePrice = Math.ceil(apprenticePrice * 1.1);
    updateHelpers();
    updateCheeseCount();
  }
});

saveGameButton.addEventListener("click", () => {
  localStorage.setItem("cheeseCount", cheeseCount);
  localStorage.setItem("pasteurizationLevel", pasteurizationLevel);
  localStorage.setItem("pasteurizationPrice", pasteurizationPrice);
  localStorage.setItem("agingLevel", agingLevel);
  localStorage.setItem("agingPrice", agingPrice);
  localStorage.setItem("helpers", helpers);
  localStorage.setItem("apprenticePrice", apprenticePrice);
  alert("Game saved successfully!");
});

loadGameButton.addEventListener("click", () => {
  cheeseCount = Number(localStorage.getItem("cheeseCount"));
  pasteurizationLevel = Number(localStorage.getItem("pasteurizationLevel"));
  pasteurizationPrice = Number(localStorage.getItem("pasteurizationPrice"));
  agingLevel = Number(localStorage.getItem("agingLevel"));
  agingPrice = Number(localStorage.getItem("agingPrice"));
  helpers = Number(localStorage.getItem("helpers"));
  apprenticePrice = Number(localStorage.getItem("apprenticePrice"));
  updatePasteurization();
  updateAging();
  updateHelpers();
  updateCheeseCount();
  alert("Game loaded successfully!");
});

resetGameButton.addEventListener("click", () => {
  if (confirm("Are you sure you want to reset the game? All progress will be lost.")) {
    cheeseCount = 0;
    pasteurizationLevel = 0;
    pasteurizationPrice = pasteurizationBasePrice;
    agingLevel = 0;
    agingPrice = agingBasePrice;
    helpers = 0;
    apprenticePrice = apprenticeBasePrice;
    updatePasteurization();
    updateAging();
    updateHelpers();
    updateCheeseCount();
  }
});

// Function to update the pasteurization level and price display
function updatePasteurization() {
  pasteurizationLevelElement.innerText = `${pasteurizationLevel}%`;
  pasteurizationPriceElement.innerText = `${pasteurizationPrice} cheese`;
}

// Function to update the aging level and price display
function updateAging() {
  agingLevelElement.innerText = `${agingLevel} days`;
  agingPriceElement.innerText = `${agingPrice} cheese`;
}

// Function to update the number of helpers and price display
function updateHelpers() {
  apprenticesElement.innerText = helpers;
  apprenticePriceElement.innerText = `${apprenticePrice} cheese`;
}

// Function to update the cheese count display
function updateCheeseCount() {
  cheeseCountElement.innerText = Math.floor(cheeseCount);
}

// Function to update the cheese per second display
function updateCheesePerSecond() {
  cheesePerSecondElement.innerText = Math.floor(cheesePerSecond);
}

// Function to add cheese over time
function addCheeseOverTime() {
  cheeseCount += cheesePerSecond / 10;
  updateCheeseCount();
}

// Call addCheeseOverTime every 100 milliseconds
setInterval(addCheeseOverTime, 100);

// Function to calculate the total cheese per second based on upgrades and helpers
function calculateCheesePerSecond() {
  let totalCheesePerSecond = 0;

  // Add base cheese per second
  totalCheesePerSecond += 1;

  // Add bonus cheese per second from pasteurization level
  totalCheesePerSecond += pasteurizationLevel / 100;

  // Add bonus cheese per second from aging level
  // (assuming each day of aging adds 0.5 cheese per second)
  totalCheesePerSecond += agingLevel * 0.5;

  // Add bonus cheese per second from helpers
  // (assuming each helper adds 2 cheese per second)
  totalCheesePerSecond += helpers * 2;

  cheesePerSecond = totalCheesePerSecond;
  updateCheesePerSecond();
}

// Call calculateCheesePerSecond every 1000 milliseconds (1 second)
setInterval(calculateCheesePerSecond, 1000);
