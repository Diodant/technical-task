function getInputValue(){
    var textVal = document.getElementById("text").value;
    var emailVal = document.getElementById("email").value;
    var messageVal = document.getElementById("message").value;

    console.log(textVal);
    console.log(emailVal);
    console.log(messageVal);
}

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
