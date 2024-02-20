

var nombre= "Roberto Esteban"
var altura = 180;

/*
var concatenacion = nombre + " " + altura;

var datos = document.getElementById("datos");
datos.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mi altura es: ${altura}cm</h3>
`;

if(altura >= 180){
    datos.innerHTML += `
        <h1>Eres una persona ALTA</h1>
    `;
}else{
    datos.innerHTML += `
        <h1>Eres una persona Baja</h1>
    `;

}


for( var i = 1999; i<= 2024; i++){
    //bloque de instrucciones
    datos.innerHTML += "<h2> Estamos en el año: "+i;
}
*/
function MuestraMiNombre(nombre, altura){
    var misDatos = `
        <h1>Soy la caja de datos</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Mi altura es: ${altura}cm</h3>
    `;

    return misDatos;
}

function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("Roberto prueba","189");
}

imprimir()


var nombres = ['Victor', 'Antonio', 'Joaquin'];
alert(nombres[1]);


document.write(`<h1>Listado de nombres</h1>`);
/*
for(i = 0; i<nombres.length; i++){
    document.write(nombres[i] + `<br/>`);
}
*/

nombres.forEach(function(nombre) {
    document.write(nombre + '<br/>');
});


/** Objetos */

var coche = {
    modelo: 'Mercedes Clase A',
    maxima: 500,
    antiguedad: 2020,
    mostrarDatos(){
        console.log(this.modelo,this.maxima,this.antiguedad);
    },
    propiedad: "Valor Aleatorio"
}


document.write("<h1>"+coche.modelo+"</h1>");
coche.mostrarDatos();
console.log(coche);

var saludar = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        let saludo = "Hola buenas a todos";
        saludo = false;
        if(saludo){
            resolve(saludo);
        }else{
            reject('No hay saludo');
        }
    },2000);
});

saludar.then(resultado =>{
    alert(resultado);
}).catch(err =>{
    alert(err);
});
