/*Creación de las variables*/

let op, archivo1, titulo, descripcion, divisa, cantParticipantes, tituloGasto, valorGasto, fechaGasto, participanteGasto, sumaTotal
sumaTotal = 0

/*Menu de opciones*/
alert(`-Gestor de Gastos-`)

alert(`-Opciones-`)
alert(`1 - Crear un archivo nuevo de Gestor de Gastos.`)
alert(`2 - Finalizar programa.`)
op = parseInt(prompt(`Ingrese el número de la opción elegida, por favor solo ingresar NÚMEROS ENTEROS del 1 al 2: `))
alert(op)

/*Validación de ingreso de datos*/
while(isNaN(op) || op!=1 && op!=2){
    op = parseInt(prompt(`Ingrese el número de la opción elegida, por favor solo ingresar NÚMEROS ENTEROS del 1 al 2: `))
}   

/*OPCIÓN 1 - CREAR EL ARCHIVO*/
if (op == 1){

    alert(`Para crear un nuevo Archivo de Gestor de Gastos debe ingresar...`)
    titulo = prompt(`Titulo, ej.: "SUPERMERCADO" : `).toUpperCase()
    descripcion = prompt(`Descripcion, ej.: "COMPRAS DEL SUPERMERCADO DEL MES 05" : `)
    divisa = prompt(`Divisa, ej.: "ARS" : `).toUpperCase()
    cantParticipantes = parseInt(prompt(`Cantidad de participantes, porfavor ingrese un NÚMERO ENTERO del 1 al 10: `))

    while(isNaN(cantParticipantes) || cantParticipantes < 1 || cantParticipantes > 10){
        cantParticipantes = prompt(`Cantidad de participantes, porfavor ingrese un NÚMERO ENTERO del 1 al 10: `)
    }

    const archivo1 = new Archivo(titulo,descripcion,divisa,cantParticipantes)

    /*Validación de ingreso de datos + menu de opciones*/
    do{

        alert(`-Opciones-`)
        alert(`1 - Ingresar un gasto.`)
        alert(`2 - Finalizar programa.`)
        op = parseInt(prompt(`Ingrese el número de la opción elegida, por favor solo ingresar NÚMEROS ENTEROS del 1 al 2: `))    
    
    } while(isNaN(op) || op!=1 && op!=2)

    /*Cargar un gasto*/
    if (op == 1){

        if(archivo1!=undefined){

            do{

                tituloGasto = prompt(`Título del producto, ej.: "arroz" : `).toUpperCase()
                valorGasto = parseFloat(prompt(`Valor del producto, ej.: "55" : `))
                fechaGasto =prompt(`Fecha del gasto, ej.: 20/05/2019 : `).toUpperCase()
                participanteGasto = prompt(`Nombre del participante, ej.: "Javier" : `).toUpperCase()
                sumaTotal += valorGasto

                archivo1.cargarGasto(tituloGasto,valorGasto,fechaGasto,participanteGasto)

                op = parseInt(prompt(`¿Quiere cargar otro gasto? Ingrese - 1 - si quiere cargar otro gasto o - 2 - si quiere finalizar el programa, porfavor ingrese un NÚMERO ENTERO del 1 al 2: `));
            } while(isNaN(op) || op > 2 || op < 1 || op != 2)
        }
    }

    /*Visualización por consola de datos de archivo1*/
    if (archivo1 != undefined){

        console.log(``)
        console.log(`${archivo1.titulo} - ${archivo1.descripcion} - DIVISA: ${archivo1.divisa} - CANTIDAD DE PARTICIPANTES: ${archivo1.cantParticipantes}`)
        archivo1.gastosTotales(sumaTotal)
    }
}