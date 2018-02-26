const form = document.querySelector("form");//Trae todo el form del HTML
form.addEventListener("submit", e => { //Evento que se detona cuando se oprime el submit
  e.preventDefault();//Evita el evento por defecto del submit (enviar a la otra página)
  validateCardDetails(form);
});

// Función de validación de tarjeta de crédito
const fCreditCard = (creditCard) => {
const creditNumber=creditCard.value;//Contiene el número de tarjeta ingresado por el usuario
const arrayCreditNumber= Array.from(creditNumber); //Array.from convierte el string en arreglo
if(creditNumber!=0){//Se ejecuta cuando se tiene un valor de entrada
  creditCard.classList.add("bg-success");
  //1. Invierte el array de entrada
  const reverseArray= arrayCreditNumber.reverse();
  //2.los pares del invertido (empezando en 1 los duplica)
  for(let j=0;j<reverseArray.length;j++){//los pares del invertido (empezando en 1 los duplica)
      if( j%2===1){//reverseCreditCard contiene todo el arreglo con los pares multiplicados
        reverseArray[j]=((reverseArray[j])*2);
      }
      if( j%2===0){
        reverseArray[j]=((reverseArray[j])*1);//convierte todo a número
      }
    }
    console.log(reverseArray);
  //3. Reducir a un dígito los pares
  for(let k=0; k<reverseArray.length;k++){
     if (reverseArray[k]>9){
         reverseArray[k]=reverseArray[k]-9;
         }
      console.log(reverseArray);
    }
  //4. Sumar todos los elementos del arreglo
  const addArray = reverseArray.reduce(function(a, b){ return a + b; });
  //5. Si el módulo de 10 del resultado es 0 es válida
  const validCard= addArray%10;
    if(validCard===0){
      document.getElementById("answer").innerText=("Tarjeta  válida");
    }
    else{
      document.getElementById("answer").innerText=("Tarjeta no válida");
    }
  }
}

// Función de vencimiento
const fExpCard = exp => {
  const year = exp.value.slice(2, 4);
  console.log("Año: "+year);
  const month = exp.value.slice(5, 8);
  console.log("Mes: "+month);
}
// Función de código de seguridad
const fCvvCard = cvv => {
  console.log("CVV: "+cvv.value);
}
// Función de nombre
const fName = name => {
  console.log("Nombre del usuario: "+name.value);
}

validateCardDetails = form => {
  const principalArray=Array.from(form);//Convierte el elemento HTML en array para poder manipularlo
//Seleccionamos cada uno de los inputs que contienen la vista principal
  const creditCard = principalArray[0];
  const exp = principalArray[1];
  const cvv = principalArray[2];
  const name = principalArray[3];
  // LLamado de funciones
  fCreditCard(creditCard);
  fExpCard(exp);
  fCvvCard(cvv);
  fName(name);
}
