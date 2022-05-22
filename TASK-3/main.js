let Celcious = document.getElementById("Celcious");
let Fahrenheit = document.getElementById("Fahrenheit");

function celTofar(){
    let output = (parseFloat(Celcious.value)*9/5 + 32);
    Fahrenheit.value = parseFloat(output.toFixed(2));
    console.log(output);

}

function farTocel(){
  let output = (parseFloat((Fahrenheit.value) -32) * .5556);
  Celcious.value = parseFloat(output.toFixed(2));
  console.log(output);
}
