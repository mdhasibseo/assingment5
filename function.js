function convertedValue (input){
  const converted =  parseInt(input)
    return converted
}

function addedNumbr(id){
    const number = document.getElementById(id);
    const convertedNumber = parseInt(number.innerText);
    const sum = convertedNumber + 1;
    number.innerText =sum;
    return number
}

function deleteNumber(id){
    const number = document.getElementById(id);
    const convertedNumber = parseInt(number.innerText);
    const sum =  convertedNumber - 1  ;
    number.innerText = sum ;
    return number
}
