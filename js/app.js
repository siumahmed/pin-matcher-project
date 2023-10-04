function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        // console.log('pin not 3 digit found', pin);
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    // display Pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
});

let displayValue = '';

function appendToDisplay(value){
    displayValue += value;
    document.getElementById('display-num').value = displayValue;
}

 function clearDisplay(){
     displayValue = '';
     document.getElementById('display-num').value = displayValue;
 }

 function backSpace(){
    displayValue = displayValue.slice(0,-1);
    document.getElementById('display-num').value = displayValue; 
 }

 document.getElementById("verify-pin").addEventListener('click' , function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('display-num');
    const typedNumber = typedNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');
  
    if(currentPin === typedNumber){
        pinSuccessMessage.style.display = 'block'
        pinFailureMessage.style.display = 'none'
    }
    else{
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none'
    }


 })























// document.getElementById('verify-pin').addEventListener('click', function(){
//     const displayPinField = document.getElementById('display-pin');
//     const currentPin = displayPinField.value;

//     const typedNumberField = document.getElementById('typed-numbers');
//     const typedNumber = typedNumberField.value;

//     const pinSuccessMessage = document.getElementById('pin-success');
//     const pinFailureMessage = document.getElementById('pin-failure');

//     if(typedNumber === currentPin){
//         pinSuccessMessage.style.display = 'block';
//         pinFailureMessage.style.display = 'none';
//     }
//     else{
//         pinFailureMessage.style.display = 'block';
//         pinSuccessMessage.style.display = 'none';
//     }
// })