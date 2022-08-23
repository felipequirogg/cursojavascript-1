const number = prompt('Diganos ¿cuantos usuarios va a agregar hoy?')

function Persona (nombre, edad, peso, altura){
    this.nombre = nombre,
    this.edad = edad,
    this.peso = peso,
    this.altura = altura
}

for (i = 1 ; i <= number ; i++){
    let nombre = prompt('¿Cual es su nombre?')
    let edad = prompt('¿Que edad tiene?')
    let peso = prompt('¿Cual es su peso?')
    let altura = prompt('¿Cual es su altura?')
if (nombre && edad && peso && altura){

    let users = new Persona(nombre,edad,peso,altura)
    console.log(users)
}else{
    alert ('Es necesario que coloque todos los datos')
}
}
alert ('Perfecto, usuario inscripto en nuestra aplicacion')