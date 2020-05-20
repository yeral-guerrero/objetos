// Javascrip Programacion Orientada a Objetos. Principios


// Declaracion de los objetos a traves de variables

var raton = {
    //Propiedades del objeto raton

    marca: 'Logitec',
    color: 'Negro',
    botones: 3
};

var teclado = {
    //Propiedades del objeto teclado
    marca: 'Microsoft',
    idioma: 'Español',
    color = 'Beige'
};

var ordenador = {
    //Propiedades del objeto ordenador
    marca: 'HP',
    modelo: 'Elite',
    procesador: 'i5',
    ram: '16 Gb',
    disco: '1 TB',

    //Metodo de ordenador para listar detalles
    ordenadordetalles: function ()
    {
        console.log(`${this.marca}  ${this.modelo} ${ths.procesador}  ${this.ram}  ${this.disco}`)
    }
};




raton.marca;
