
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: "Esta es la base que debemos de mandar para que se haga la multiplicacion."
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false
                })
                .option('h',{
                    alias:'hasta',
                    type:'number',
                })
                .check((argv) => {
                    if (isNaN(argv.b)) {
                        throw 'Debe de ser numero';
                    }
                    if(isNaN(argv.h)){
                        throw 'el argumento HASTA debe de ser un numero';
                    }
                    return true;
                })
                .argv;

module.exports = argv;