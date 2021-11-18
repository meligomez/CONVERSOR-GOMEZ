export class conversor{
    
    tipoMonedaIngresado: string;
    importeIngresado: number;
    tipoMonedaResultado: string;
    private importeResultado: number;

    public convertir(tipoMonedaIngresado,importeIngresado,tipoMonedaResultado):number{

        if(tipoMonedaIngresado==="ARS" && tipoMonedaResultado==="USD"){
            this.importeResultado=importeIngresado/100;
            return this.importeResultado;
        }
        if(tipoMonedaIngresado==="USD" && tipoMonedaResultado==="ARS"){
            this.importeResultado=importeIngresado*100;
            return this.importeResultado;
        }

        return -1;
    }

}

var pruebaConversor = new conversor();
console.log("La conversion es la siguiente: $"+pruebaConversor.convertir("ARS",190,"USD"));
console.log("La conversion es la siguiente: $"+pruebaConversor.convertir("USD",10,"ARS"));