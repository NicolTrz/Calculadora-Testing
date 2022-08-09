const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");

const operacion = document.querySelector(".operacion");
const resultado = document.querySelector(".resultado");

function calcular() {

  let num1 = Number(number1.value);
  let num2 = Number(number2.value);

  if (operacion.value === "+") {
    let num01 = new Number(num1);
    let num02 = new Number(num2);
    let result = (num01 + num02);
    resultado.textContent = result.toFixed(2);

  } else if (operacion.value === "-") {
    let result = (num1 - num2);
    resultado.textContent = result.toFixed(2);

  } else if (operacion.value === "*") {
    let result = (num1 * num2);
    resultado.textContent = result.toFixed(2);

  } else if (operacion.value === "/") {
    let result = (num1 / num2);
    resultado.textContent = result.toFixed(2);

  } else if (operacion.value === "%") {
    let result = (num1 % num2);
    resultado.textContent = result.toFixed(2);
  } 

  else if (operacion.value !== "+" || operacion.value !== "-" || operacion.value !== "*" || operacion.value !== "/" || operacion.value !== "%") {
    resultado.textContent = "La operación ingresada no es valida";
  } 

  if (resultado.textContent === "Infinity") {
    resultado.textContent = "No es valido dividir por cero.";
  }
  if(resultado.textContent === "NaN"){
    resultado.textContent = "Los datos no son validos."
  }else if((num1 != Math.round(num1) || (num2 != Math.round(num2)))  && operacion.value === "%") {
    resultado.textContent = "No es valido hallar el modulo con números decimales.";
  }
 

}

operacion.addEventListener("keydown", (event) => {
  if (event.keyCode == 13) {
    calcular()
  }
})

number1.addEventListener("keydown", (event) => {
  if (event.keyCode == 13) {
    calcular()
  }
})

number2.addEventListener("keydown", (event) => {
  if (event.keyCode == 13) {
    calcular()
  }
})




