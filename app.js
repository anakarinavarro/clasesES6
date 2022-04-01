class Cliente{
    #nombre;

    constructor(nombre, impuesto){
        this.#nombre = nombre;
        this.impuesto = impuesto;
    }
    
    calculoImpuesto(){
       return ((this.impuesto.montoBrutoAnual - this.impuesto.deducciones) * 0.21);
    };
};


class Impuestos{
    #montoBrutoAnual;
    #deducciones;

    constructor(montoBrutoAnual, deducciones){
        this.#montoBrutoAnual = montoBrutoAnual
        this.#deducciones = deducciones
    }
    get datosImpuesto(){
        return {
            montoBrutoAnual: this.#montoBrutoAnual , 
            deducciones: this.#deducciones
        };
    };
};

const impuestoCliente = new Impuestos(100_000_000, 10_000_000);
const nuevoCliente = new Cliente("Ana Navarro", impuestoCliente.datosImpuesto);
const impuestoFinal = nuevoCliente.calculoImpuesto();

console.log(nuevoCliente.nombre);
console.log(impuestoFinal);

