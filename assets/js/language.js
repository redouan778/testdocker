const selectedEnglish = document.getElementById("eng");
const selectedDeutsch = document.getElementById("ds");
const selectedNederlands = document.getElementById("nl");

const hidden = "display:none;";
const shown = "display:block;";

const allEnglishText = document.getElementsByClassName("eng");
const allDeutschText = document.getElementsByClassName("ds");
const allNederlandsText = document.getElementsByClassName("nl");


function showEnglishText() {
    for (element in allEnglishText) {
        allEnglishText[element].style = shown;
    }
    for (element in allDeutschText) {
        allDeutschText[element].style = hidden;
    }
    for (element in allNederlandsText) {
        allNederlandsText[element].style = hidden;
    }
}

function showDeutschText() {
    for (element in allEnglishText) {
        allEnglishText[element].style = hidden;
    }
    for (element in allDeutschText) {
        allDeutschText[element].style = shown;
    }
    for (element in allNederlandsText) {
        allNederlandsText[element].style = hidden;
    }
}

function showNederlandText() {
    for (element in allEnglishText) {
        allEnglishText[element].style = hidden;
    }
    for (element in allDeutschText) {
        allDeutschText[element].style = hidden;
    }
    for (element in allNederlandsText) {
        allNederlandsText[element].style = shown;
    }
}

selectedEnglish.addEventListener("click", () => {
    selectedEnglish.classList.add("langSelected");
    selectedDeutsch.classList.remove("langSelected");
    selectedNederlands.classList.remove("langSelected");

    showEnglishText();
});
selectedDeutsch.addEventListener("click", () => {
    selectedDeutsch.classList.add("langSelected");
    selectedEnglish.classList.remove("langSelected");
    selectedNederlands.classList.remove("langSelected");

    showDeutschText();
});

selectedNederlands.addEventListener("click", () => {
    selectedNederlands.classList.add("langSelected");
    selectedDeutsch.classList.remove("langSelected");
    selectedEnglish.classList.remove("langSelected");

    showNederlandText();
});
selectedEnglish.addEventListener("click", () => {
    selectedEnglish.classList.add("langSelected");
    selectedDeutsch.classList.remove("langSelected");
    selectedNederlands.classList.remove("langSelected");

    showEnglishText();
    localStorage.setItem("languageActive", "english");
});

selectedDeutsch.addEventListener("click", () => {
    selectedDeutsch.classList.add("langSelected");
    selectedEnglish.classList.remove("langSelected");
    selectedNederlands.classList.remove("langSelected");

    showDeutschText();
    localStorage.setItem("languageActive", "deutsch");
});

selectedNederlands.addEventListener("click", () => {
    selectedNederlands.classList.add("langSelected");
    selectedDeutsch.classList.remove("langSelected");
    selectedEnglish.classList.remove("langSelected");

    showNederlandText();
    localStorage.setItem("languageActive", "nederlands");
});

switch (localStorage.getItem("languageActive")) {

    case "english":
        selectedEnglish.classList.add("langSelected");
        showEnglishText();
        break;

    case "deutsch":
        selectedDeutsch.classList.add("langSelected");
        showDeutschText();
        break;

    case "nederlands":
        selectedNederlands.classList.add("langSelected");
        showNederlandText();
        break;

    default:
        selectedEnglish.classList.add("langSelected");
        /*showEnglishText();*/
        showNederlandText();
}