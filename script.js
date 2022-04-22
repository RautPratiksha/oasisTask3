let Celcius=document.getElementById('Celcius')
let Fahrenheit=document.getElementById('Fahrenheit')

Celcius.oninput=()=>{
    let output=(parseFloat(Celcius.value)*9)/5+32;
    Fahrenheit.value=parseFloat(output.toFixed(2))

};
Fahrenheit.oninput=()=>{
    let output=((parseFloat(Fahrenheit.value)-32)*5)/9;
    Celcius.value=parseFloat(output.toFixed(2));
}