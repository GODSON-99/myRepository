let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let divEl = document.getElementById("wordsContainer");
let inputEl = document.getElementById("userInput");
let paraEl = document.getElementById("errorMsg");
let addBtnEl = document.getElementById("addBtn");

function wordCloudFunc(word) {
    let spanEl = document.createElement("span");
    divEl.appendChild(spanEl);
    let wordCloudLength = wordCloud.length;
    let randFontSize = Math.ceil(Math.random() * 50) - 1;
    randFontSize = randFontSize + "px";
    spanEl.textContent = word;
    spanEl.style.fontSize = randFontSize;
    spanEl.style.padding = "15px";

}

for (let eachWord of wordCloud) {
    wordCloudFunc(eachWord);
}

function addWord() {

    if (inputEl.value === "") {
        paraEl.textContent = "Please enter a word!"
    } else {
        let inputWord = inputEl.value;
        wordCloudFunc(inputWord);
        inputEl.value = "";
    }
}