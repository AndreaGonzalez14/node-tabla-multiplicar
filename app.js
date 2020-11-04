//Path relativo
//const multiplicar = require('./multiplicar/multiplicar')
const { alias } = require('yargs');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const yarg = require('./config/yargs').argv;




let comando = yarg._[0]

switch (comando) {
    case 'crear':
        crearArchivo(yarg.base, yarg.limite).then(salida => {
            console.log(salida);
        }).catch(error => {
            console.log(error);
        })
        break;
    case 'imprimir':
        listarTabla(yarg.base, yarg.limite).catch(error => {
            console.log(error);
        })
        break;

    default:
        break;
}

/* let base = argv.base;

crearArchivo(base).then(salida => {
    console.log(salida);
}).catch(error => {
    console.log(error);
}) */