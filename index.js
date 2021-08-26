const billAmount = document.querySelector("#billAmount");
const checkButton = document.querySelector("#checkButton");
const cashGiven = document.querySelector("#cashGiven");
const errorMessage = document.querySelector("#errorMessage");
const notes = [2000, 500, 100, 20, 10, 5, 1];
checkButton.addEventListener("click", OnClickHandler);

function OnClickHandler() {
    messageHide();

    if (billAmount.value > 0) {
        if (billAmount.value >= cashGiven.value) {} else {
            showError("The given cash is less !!");
        }

    } else {
        showError("Enter a valid number !!");

    }

}

function showError(error_msg) {

    errorMessage.style.display = "block";
    errorMessage.innerText = "error";
}

function messageHide() {
    errorMessage.style.display = "none";
};