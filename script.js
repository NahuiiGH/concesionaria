/* requerir módulo autos */
let autos = require ('./modulos/autos');

const comprador = {
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    }

const concesionaria = {
    /* completar */
   autos: autos,

   buscarAuto: function(patente){
       for(let i=0; i < this.autos.length; i++){

        if (this.autos[i].patente == patente){
            return autos[i];
        }else{
            return null
        }

       }
   },

   venderAuto: function(patente){

        let autoVendido = this.buscarAuto(patente);
        return autoVendido.vendido = true;

        // if (autoVendido !== null){
        //     autoVendido.vendido = true
        //     console.log('El auto ' + autoVendido.patente + ' ha sido vendido');
        // // }//else{
        // //     console.log('El auto '+ patente + ' no ha sido vendido');
        // }

    },

    autosParaLaVenta: function autosParaLaVenta(){
    return this.autos.filter(function(autos){
        return !autos.vendido;
        
        }) 
    },

     
    
    autosNuevos: function autosNuevos(){
         return this.autosParaLaVenta().filter(function(autos){
             return autos.km<= 100;
         
        })
    },

    listaDeVentas: function listaDeVentas(){
        let totalAutoVendido = [];

        for (let i=0; i<this.autos.length; i++){

            if (this.autos[i].vendido == true){
                totalAutoVendido.push(this.autos[i].precio)
            }

        }
        return totalAutoVendido;
    },

    totalDeVentas: function totalDeVentas(){
        let ventas = this.listaDeVentas();

        if(ventas.length !== 0){
            
            totalVendido = ventas.reduce(function(acum,venta){
            return acum + venta;
            })
            return totalVendido;
        }else{
            return 0;
        }
        
    },

    puedeComprar: function puedeComprar(auto,comprador){
        let valorCuota = auto.precio / auto.cuotas;
        
        if ((comprador.capacidadDePagoTotal >= auto.precio) && (valorCuota <= comprador.capacidadDePagoEnCuotas)){
            
            return true
        }else{
            return false
        };
    },

    autosQuePuedeComprar: function autosQuePuedeComprar(comprador){
        let autosParaLaVenta = this.autosParaLaVenta();
        let acumulador = [];
        
        for (let i=0; i<autosParaLaVenta.length; i++){
            if(this.puedeComprar(autosParaLaVenta[i],comprador) == true){
                acumulador.push(autosParaLaVenta[i]);
            }
        }

        return acumulador;

        

    }


    
    
    

};

concesionaria.venderAuto('APL123');

console.log(concesionaria.autosQuePuedeComprar(comprador));

// console.log(autos[0]);