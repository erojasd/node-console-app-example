const { argv } = require('./config/yargs');
const colors = require('colors');

let comando = argv._[0];
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(console.error);

        break;
    default:
        console.log('comando no reconocido');
}


// console.log(crearArchivo);
// console.log(process.argv);
let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];


console.log('Limite', argv.limite);
// console.log(argv2);