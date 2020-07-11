const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en pantalla la tabla de multiplicar', opts)
    .command('crear', 'crea un archivo con tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}