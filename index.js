const billAmount = document.querySelector("#billAmount");
const checkButton = document.querySelector("#checkButton");
const cashGiven = document.querySelector("#cashGiven");
const errorMessage = document.querySelector("#errorMessage");
const countOfNotess=document.querySelector(".countOfNotes");

const notes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", OnClickHandler);

function OnClickHandler() {
    messageHide();

    if (billAmount.value > 0) {
        
        if (cashGiven.value>=billAmount.value) {
    
            const cashbackAmount=cashGiven.value-billAmount.value;
            calculateNotes(cashbackAmount);

        }
         else {
             console.log("bro")
            showError("The given cash is less !!");
              }

    }
 
 else {
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

function calculateNotes(cashbackAmount)
{
     
for(let i=0;i<notes.length;i++)
{
    const totalNotes=Math.trunc(cashbackAmount/notes[i]);
   cashbackAmount =Math.trunc(cashbackAmount%notes[i]);

    countOfNotess[i].innerText=totalNotes;

}
}