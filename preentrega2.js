let resultado;

class Inversion{
    constructor(banco,cbu,plazo,capital){
        this.banco = banco;
        this.cbu = cbu;
        this.plazo = plazo;
        this.capital = capital;
    }

    interes(){
       resultado = Math.round(this.capital * (1.18 * this.plazo / 365)); //1,18 es la tasa de interés 
       return resultado;
    }
}

let datos = [];
datos.push(new Inversion(
      prompt("Ingrese el banco donde se le depositará el dinero"),
    +(prompt("Ingrese su CBU de 6 dígitos donde se le depositará el dinero")),
    +(prompt("Ingrese un plazo: 30, 60, 90 o 120 días")),
    +(prompt("Ingrese el capital a invertir"))
));

let entrada;

if(datos[0].capital > 0){
    switch(datos[0].plazo){
        case 30:
            for(const dato of datos){
               entrada = dato.interes();
            }
            alert("Banco: " + datos[0].banco + "\n" + 
                   "CBU: " + datos[0].cbu + "\n" + 
                   "Plazo elegido: " + datos[0].plazo + " días \n" +
                   "Capital invertido: $" + datos[0].capital + "\n" +
                   "Interés: $" + resultado + "\n" +
                   "Dinero a depositar: $" + (datos[0].capital + resultado)
                 );
            break;
        
        case 60:
            for(const dato of datos){
                entrada = 2*(dato.interes());
             }
             alert("Banco: " + datos[0].banco + "\n" + 
                    "CBU: " + datos[0].cbu + "\n" + 
                    "Plazo elegido: " + datos[0].plazo + " días \n" +
                    "Capital invertido: $" + datos[0].capital + "\n" +
                    "Interés: $" + resultado + "\n" +
                    "Dinero a depositar: $" + (datos[0].capital + resultado)
                  );
             break;
    
        case 90:
            for(const dato of datos){
                entrada = 4*(dato.interes());
             }
             alert("Banco: " + datos[0].banco + "\n" + 
                    "CBU: " + datos[0].cbu + "\n" + 
                    "Plazo elegido: " + datos[0].plazo + " días \n" +
                    "Capital invertido: $" + datos[0].capital + "\n" +
                    "Interés: $" + resultado + "\n" +
                    "Dinero a depositar: $" + (datos[0].capital + resultado)
                  );
             break;
    
        case 120:
            for(const dato of datos){
                entrada = 8*(dato.interes());
             }
             alert("Banco: " + datos[0].banco + "\n" + 
                    "CBU: " + datos[0].cbu + "\n" + 
                    "Plazo elegido: " + datos[0].plazo + " días \n" +
                    "Capital invertido: $" + datos[0].capital + "\n" +
                    "Interés: $" + resultado + "\n" +
                    "Dinero a depositar: $" + (datos[0].capital + resultado)
                  );
            break;
    
        default:
            alert("Por favor ingrese un plazo válido");
            break;
    }
}else{
    alert("Por favor ingrese un valor válido");
}
         