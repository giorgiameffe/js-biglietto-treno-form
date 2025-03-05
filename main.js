
const infoForm = document.querySelector('form');
console.log(infoForm);

const inputKilometres = document.getElementById('userKm');
console.log(inputKilometres);

const inputAge = document.getElementById('userAge');
console.log(inputAge);

infoForm.addEventListener ('submit', function (event) {
    event.preventDefault();
    
    const kmToDo = parseInt(inputKilometres.value)
    console.log(`I chilometri che l'utente vuole percorrere sono ${kmToDo}`);

    const myAge = parseInt(inputAge.value);
    console.log(`L'età dell'utente è di ${myAge} anni`); 

    
    // aggiungere elemento html

    const ticketPrice = finalPrice(kmToDo, myAge);
    const parentElement = document.querySelector('.container-final-price');
    const childElement = document.createElement ('div');
    parentElement.appendChild(childElement);
    childElement.classList.add('final-price');
    childElement.innerHTML =  ticketPrice;
  
})


function finalPrice (km,age) { 

    const priceKm = 0.21;

    //calcolo del prezzo base
    let fullPrice = priceKm * km;

    //calcolo della percentuale
    let discountPercentage = 0;
        
    if (age < 18) {
        
        discountPercentage = 20;} 
        
        else if (age > 65) {
    
        discountPercentage = 40;
    }
    
    console.log('Percentuale di sconto', discountPercentage);
        
    let discount = (fullPrice * discountPercentage) / 100;
    console.log('Sconto', discount);
        
    // calcolare la cifra scontata
    fullPrice = fullPrice - discount;
        
    //ridurre la cifra ottenuta ad un valore con massimo due decimali
    fullPrice.toFixed(2);
    console.log( `Il prezzo finale è di ${fullPrice.toFixed(2)} €`);
        
    return fullPrice;

}

