//Importar el modulo(paquete)
const fs = require('fs')
const colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        let data = "";

        if (!Number(base)) {
            reject(colors.red(`El valor introducido '${base}' no es un numero`))
            return;
        }

        for (let index = 1; index <= limite; index++) {
            data += `${base} x ${index} = ${base*index} \n`;

        }

        //Manejo de ficheros
        fs.writeFile(`tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`El archivo tabla-${base}.txt ha sido creado`);
        });
    })
}

//Listar la tabla de multiplicar

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        let data = "";

        if (!Number(base)) {
            reject(`El valor introducido '${base}' no es un numero`.red)
            return;
        }
        console.log("--------------------------------".green);
        console.log(`    TABLA DE MULTIPLICAR - ${base}`.green);
        console.log("--------------------------------".green);

        for (let index = 1; index <= limite; index++) {
            console.log(`${base} x ${index} = ${base*index}`);

        }
    })
}

//No hay encapsulamiento
module.exports = {
    crearArchivo,
    listarTabla
}