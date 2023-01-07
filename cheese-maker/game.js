const cheesePerClickBase = 1;
let cheesePerClick = cheesePerClickBase;
let cheeseCount = 0;
let cheesePerSecond = 0;
let pasteurizationLevel = 0;
let agingLevel = 0;
let helpers = 0;
const pasteurizationBasePrice = 100;
const agingBasePrice = 200;
const apprenticeBasePrice = 500;
const clickUpgradeBasePrice = 1000;
let pasteurizationPrice = pasteurizationBasePrice;
let agingPrice = agingBasePrice;
let apprenticePrice = apprenticeBasePrice;
let clickUpgradePrice = clickUpgradeBasePrice;

const makeCheeseButton = document.getElementById("make-cheese-button");
makeCheeseButton.addEventListener("click", function () {
  cheeseCount += cheesePerClick;
  updateCheeseCount();
});

const pasteurizationButton = document.getElementById("pasteurization-button");
pasteurizationButton.addEventListener("click", function () {
  if (cheeseCount >= pasteurizationPrice) {
    cheeseCount -= pasteurizationPrice;
    pasteurizationLevel++;
    pasteurizationPrice *= 1.1;
    cheesePerSecond += 1;
    updateCheeseCount();
    updatePasteurization();
  }
});

const agingButton = document.getElementById("aging-button");
agingButton.addEventListener("click", function () {
  if (cheeseCount >= agingPrice) {
    cheeseCount -= agingPrice;
    agingLevel++;
    agingPrice *= 1.1;
    cheesePerSecond += 2;
    updateCheeseCount();
    updateAging();
  }
});

const apprenticeButton = document.getElementById("apprentice-button");
apprenticeButton.addEventListener("click", function () {
  if (cheeseCount >= apprenticePrice) {
    cheeseCount -= apprenticePrice;
    helpers++;
    apprenticePrice *= 1.1;
    cheesePerSecond += 5;
    updateCheeseCount();
    updateApprentices();
  }
});

const clickUpgradeButton = document.getElementById("click-upgrade-button");
clickUpgradeButton.addEventListener("click", function () {
  if (cheeseCount >= clickUpgradePrice) {
    cheeseCount -= clickUpgradePrice;
    cheesePerClick++;
    clickUpgradePrice *= 1.1;
    updateCheeseCount();
    updateClickUpgrade();
  }
});

const saveGameButton = document.getElementById("save-game-button");
saveGameButton.addEventListener("click", function () {
  localStorage.setItem("cheeseCount", cheeseCount);
  localStorage.setItem("pasteurizationLevel", pasteurizationLevel);
  localStorage.setItem("agingLevel", agingLevel);
  localStorage.setItem("helpers", helpers);
  localStorage.setItem("pasteurizationPrice", pasteurizationPrice);
  localStorage.setItem("agingPrice", agingPrice);
  localStorage.setItem("apprenticePrice", apprenticePrice);
  localStorage.setItem("clickUpgradePrice", clickUpgradePrice);
  localStorage.setItem("clickUpgradeLevel", cheesePerClick);
});

const loadGameButton = document.getElementById("load-game-button");
loadGameButton.addEventListener("click", function () {
  cheeseCount = parseInt(localStorage.getItem("cheeseCount")) || 0;
  pasteurizationLevel = parseInt(
    localStorage.getItem("pasteurizationLevel")
  ) || 0;
  agingLevel = parseInt(localStorage.getItem("agingLevel")) || 0;
  helpers = parseInt(localStorage.getItem("helpers")) || 0;
  pasteurizationPrice = parseInt(
    localStorage.getItem("pasteurizationPrice")
  ) || pasteurizationBasePrice;
  agingPrice = parseInt(localStorage.getItem("agingPrice")) || agingBasePrice;
  apprenticePrice =
    parseInt(localStorage.getItem("apprenticePrice")) || apprenticeBasePrice;
  clickUpgradePrice =
    parseInt(localStorage.getItem("clickUpgradePrice")) ||
    clickUpgradeBasePrice;
  cheesePerClick =
    parseInt(localStorage.getItem("clickUpgradeLevel")) || cheesePerClickBase;
  updateCheeseCount();
  updatePasteurization();
  updateAging();
  updateApprentices();
  updateClickUpgrade();
});

const resetGameButton = document.getElementById("reset-game-button");
resetGameButton.addEventListener("click", function () {
  cheeseCount = 0;
  pasteurizationLevel = 0;
  agingLevel = 0;
  helpers = 0;
  pasteurizationPrice = pasteurizationBasePrice;
  agingPrice = agingBasePrice;
  apprenticePrice = apprenticeBasePrice;
  clickUpgradePrice = clickUpgradeBasePrice;
  cheesePerClick = cheesePerClickBase;
  updateCheeseCount();
  updatePasteurization();
  updateAging();
  updateApprentices();
  updateClickUpgrade();
});

setInterval(function () {
  cheeseCount += cheesePerSecond / 10;
  updateCheeseCount();
}, 100);

setInterval(function () {
  cheesePerSecond = pasteurizationLevel + agingLevel * 2 + helpers * 5;
  updateCheesePerSecond();
}, 1000);

function updateCheeseCount() {
  document.getElementById("cheese-count").innerHTML = Math.floor(cheeseCount);
}

function updateCheesePerSecond() {
  document.getElementById("cheese-per-second").innerHTML = cheesePerSecond;
}

function updatePasteurization() {
  document.getElementById("pasteurization-level").innerHTML =
    pasteurizationLevel + "%";
  document.getElementById("pasteurization-price").innerHTML = parseInt(pasteurizationPrice) + " cheese";
}

function updateAging() {
  document.getElementById("aging-level").innerHTML = agingLevel + " days";
  document.getElementById("aging-price").innerHTML = parseInt(agingPrice) + " cheese";
}

function updateApprentices() {
  document.getElementById("apprentices-level").innerHTML = helpers;
  document.getElementById("apprentice-price").innerHTML = parseInt(apprenticePrice) + " cheese";
}

function updateClickUpgrade() {
  document.getElementById("click-upgrade-level").innerHTML = cheesePerClick;
  document.getElementById("click-upgrade-price").innerHTML = parseInt(clickUpgradePrice) + " cheese";
}

updateCheeseCount();
updateCheesePerSecond();
updatePasteurization();
updateAging();
updateApprentices();
updateClickUpgrade();

const achievements = [
  {
    label: "First Cheese",
    description: "Made your first cheese",
    icon: "🧀",
    trigger: function () {
      return cheeseCount >= 1;
    },
  },
  {
    label: "Cheese Aficionado",
    description: "Made 100 cheese",
    icon: "🧀🧀🧀🧀🧀",
    trigger: function () {
      return cheeseCount >= 100;
    },
  },
  {
    label: "Master Cheese Maker",
    description: "Made 1000 cheese",
    icon: "🧀🧀🧀🧀🧀🧀🧀🧀🧀🧀",
    trigger: function () {
      return cheeseCount >= 1000;
    },
  },
];

const achievementList = document.getElementById("achievement-list");

function checkAchievements() {
  achievements.forEach(function (achievement) {
    if (achievement.unlocked) return;
    if (achievement.trigger()) {
      achievement.unlocked = true;
      const achievementElement = document.createElement("div");
      achievementElement.classList.add("achievement");
      const iconElement = document.createElement("div");
      iconElement.classList.add("achievement-icon");
      iconElement.innerHTML = achievement.icon;
      const labelElement = document.createElement("div");
      labelElement.classList.add("achievement-label");
      labelElement.innerHTML = achievement.label;
      const descriptionElement = document.createElement("div");
      descriptionElement.classList.add("achievement-description");
      descriptionElement.innerHTML = achievement.description;
      achievementElement.appendChild(iconElement);
      achievementElement.appendChild(labelElement);
      achievementElement.appendChild(descriptionElement);
      achievementList.appendChild(achievementElement);
    }
  });
}

setInterval(checkAchievements, 1000);
