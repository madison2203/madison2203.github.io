// const myButton = document.querySelector("#my-button");
// console.log(myButton);

// const count = document.querySelector("#count");
// console.log(count);

// let buttonCount = 0;
// myButton.addEventListener("click", myFunction);

// function myFunction() {
//     // buttonCount = buttonCount + 1;
//     buttonCount++;
//     console.log("hey did you just click me?");
//     count.textContent = buttonCount;
// }

const boxContainer = document.querySelector(".box-container");
console.log(boxContainer);

const toggleButton = document.querySelector("#toggle-button");
console.log(toggleButton);

const addButton = document.querySelector("#add-button");
console.log(addButton);

addButton.addEventListener("click", addMe);
let count = 0;

function addMe() {
  console.log("add button is now clicked");
  // boxContainer.innerHTML += `<div class="box purple-box"></div>
  //     <div class="box coral-box"></div>`;

  if (count % 2 === 0) {
    boxContainer.innerHTML += `<div class="box purple-box"></div>`;
  } else {
    boxContainer.innerHTML += `<div class="box coral-box"></div>`;
  }
  count++;
}

let removeButton = document.querySelector("#remove-button");
removeButton.addEventListener("dblclick", removeMe);
// only remove when double click: dblclick

function removeMe() {
  let lastBox = boxContainer.lastElementChild;
  console.log(lastBox);
  if (lastBox) {
    lastBox.remove();
  }
  count--;
}

boxContainer.addEventListener("mouseover", dropMe);
function dropMe() {
  boxContainer.classList.add("drop");
}
boxContainer.addEventListener("mouseout", pickMe);
function pickMe() {
  boxContainer.classList.remove("drop");
}

addButton.addEventListener("mouseover", colorMe);
addButton.addEventListener("mouseout", decolorMe);

function colorMe() {
  addButton.classList.add("purple-box");
}
