//Elements
const rollBtn = document.getElementById("roll-btn");
const diceEl = document.getElementById("dice");
const rollHistoryList = document.getElementById("roll-history");

const historyList = []; //store roll history

// Roll the dice and update history
function rollDice() {
  const rollResult = Math.floor(Math.random() * 6) + 1; //random result 1-6
//   console.log("", rollResult);

  //Show the correct dice face
  const diceFace = getDiceFace(rollResult);
  diceEl.innerHTML = diceFace;

  //Update history roll
  historyList.push(rollResult);
  updateRollHistory();
}

// Get the corresponding dice face for a roll result
function getDiceFace(rollResult) {
  switch (rollResult) {
    case 1:
      return "&#9856;";

    case 2:
      return "&#9857;";

    case 3:
      return "&#9858;";

    case 4:
      return "&#9859;";

    case 5:
      return "&#9860;";

    case 6:
      return "&#9861;";

    default:
      return "";
  }
}

function updateRollHistory() {
  rollHistoryList.innerHTML = ""; // Clear previous history
  for (let i = 0; i < historyList.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`;
    rollHistoryList.appendChild(listItem); //Append the list item to the history list
  }
}

// Add a click event listener to the roll button
rollBtn.addEventListener("click", () => {
  diceEl.classList.add("roll-animation"); // Add the "roll-animation" class to trigger animation

  // Remove the "roll-animation" class after 1 second to stop animation
  // it can make dice to roll again
  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});
