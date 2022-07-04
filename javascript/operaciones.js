/*Operaciones del gestor de datos*/

/*Clase constructora*/
class Archivo{
    /*Atributos de la clase Archivo*/
    constructor(titulo, descripcion, divisa, cantParticipantes){
        this.titulo = titulo
        this.descripcion = descripcion
        this.divisa = divisa
        this.cantParticipantes = cantParticipantes
        this.gasto = 0
        this.gastoPorParticipante = 0
        this.gastoTotalParticipantes = 0
    }

    /*Métodos*/
    /*Cargamos un gasto y dividimos el gasto por la cantidad de participantes del archivo1*/
    cargarGasto(tituloGasto, valorGasto, fechaGasto, participanteGasto){

        this.gasto = valorGasto
        this.gastoPorParticipante = (valorGasto / this.cantParticipantes)
        
        console.log(``)
        console.log(`PRODUCTO: ${tituloGasto} - VALOR: ${valorGasto} ${this.divisa} - FECHA: ${fechaGasto} - LO PAGÓ: ${participanteGasto}`)
        console.log(`A cada participante le corresponde pagar: ${this.gastoPorParticipante} ${this.divisa}`)
    }

    /*Suma de cada gasto + visualización de gastos totales y gastos totales por cada participante*/
    gastosTotales(sumaTotal){

        this.sumaTotal = sumaTotal

        console.log(``)
        console.log(`Hasta ahora se gastó en total: ${this.sumaTotal} ${this.divisa}`)
        this.gastoTotalParticipantes = (this.sumaTotal / 2)
        console.log(`A cada participante le corresponde pagar: ${this.gastoTotalParticipantes} ${this.divisa}`)
    }
}