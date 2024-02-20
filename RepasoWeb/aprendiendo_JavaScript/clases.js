class Coche{
    constructor(modelo, velocidad, antiguedad){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }

    aumetarVelocidad(){
        this.velocidad +=1;
    }

    reducidVelocidad(){
        this.velocidad -=1;
    }
}


class Autobus extends Coche{
    constructor(modelo, velocidad, antiguedad){
        super(modelo.velocidad.antiguedad);
        this.altura = 5;

    }
    mostrarAltura(){
        return "La altura es "+this.altura;
    }
}

var autobus1 = new Autobus('Pegasus', 100, 2020);
var coche1 = new Coche('BMW', 200, 2023);
var coche2 = new Coche('AUDI', 130, 2022);
var coche3 = new Coche('TESLA', 400, 2024);


document.write("<h1>Velocidad: "+coche1.velocidad+"</h1>");
coche1.aumetarVelocidad();
coche1.aumetarVelocidad();
coche1.aumetarVelocidad();

document.write("<h1>Velocidad: "+coche1.velocidad+"</h1>");