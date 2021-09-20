const billAmount = document.querySelector("#billAmount");
const cashGiven = document.querySelector("#cashGiven");
const errorMessage = document.querySelector("#errorMessage");
const countOfNotess = document.querySelectorAll(".countOfNotes");
const checkButton = document.querySelector("#checkButton");
const cashGivenSection = document.querySelector("#cash-given-section");
const notesChangeTable = document.querySelector("#notes-change-table");
const NextButton = document.querySelector("#next-button");
cashGivenSection.style.display = "none";
notesChangeTable.style.display = "none";

const notes = [2000, 500, 100, 20, 10, 5, 1];

function nextButtonClick() {

    if (billAmount.value > 0) {
        errorMessage.style.display = "none";
        cashGivenSection.style.display = "block";

    } else {
        showError("Enter a valid number");
    }
}



function OnClickHandler() {
    messageHide();

    if (billAmount.value > 0) {

        if (Number(cashGiven.value) >= Number(billAmount.value)) {
            const cashbackAmount = cashGiven.value - billAmount.value;
            calculateNotes(cashbackAmount);
            notesChangeTable.style.display = "block";
            if(Number(cashGiven.value) === Number(billAmount.value)){

                showError("No money is to be returned !!");
            }


        } else {
            showError("The given cash is less !!");
        }

    } else {
        showError("Enter a valid number !!");
    }


}


function showError(error_msg) {

    errorMessage.style.display = "block";
    errorMessage.innerText = error_msg;
}

function messageHide() {
    errorMessage.style.display = "none";
}

function calculateNotes(cashbackAmount) {

    for (let i = 0; i < notes.length; i++) {
        const totalNotes = Math.trunc(cashbackAmount / notes[i]);
        cashbackAmount = Math.trunc(cashbackAmount % notes[i]);
        countOfNotess[i].innerText = totalNotes;

    }


}

checkButton.addEventListener("click", OnClickHandler);
NextButton.addEventListener("click", nextButtonClick);