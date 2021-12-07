const billAmount=document.querySelector("#bill-amount");
const cashGiven=document.querySelector("#cash-given")
const checkButten=document.querySelector("#check-button");
const message=document.querySelector("#error-message")
const noOfNotes=document.querySelectorAll(".no-of-notes")

var avilableNotes=[2000,500,100,50,20,10,5,1]


checkButten.addEventListener("click", function validateBillAndCashAmount(){
    hideMesssge();
    if (billAmount.value > 0){
        if(cashGiven.value >=billAmount.value){
            const amountTobeReturned=cashGiven.value-billAmount.value   
            calculateChange(amountTobeReturned)

        }else{
            showMessage("the cash provided should atlest be equal to the bill amount");
        }

    }else{
       showMessage("Invlid Bill Amount ");
    }
});
function calculateChange(amountTobeReturned){
    for(let i=0;i < avilableNotes.length;i++){
        const numberOfNotes = Math.trunc(amountTobeReturned / avilableNotes[i]);
        amountTobeReturned %= avilableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
        
    }
};
function hideMesssge(){
    message.style.display="none"; 
}

function showMessage(msg){
    message.style.display="block";
    message.innerText = msg;

}