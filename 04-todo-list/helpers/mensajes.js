const { resolveCaa } = require('dns');

require('colors');

const showMenu = () => {
    return new Promise((resolve,reject)=>{

        console.clear();
        console.log('========================='.green)
        console.log(' Seleccionar una opcion'.green)
        console.log('=========================\n'.green)
    
        console.log(`${'1'.green}. Crear tarea`)
        console.log(`${'2'.green}. listar Tareas`)
        console.log(`${'3'.green}. listar tareas completadas`)
        console.log(`${'4'.green}. listar tareas pendientes`)
        console.log(`${'5'.green}. completar tareas`)
        console.log(`${'6'.green}. borrar tarea`)
        console.log(`${'0'.green}. salir\n`)
    
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readLine.question('Seleccione una opcion ', (res) => {
            readLine.close();
            resolve(res);
        });

    }) 
}

let pause = () => {
    return new Promise(resolve =>{
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readLine.question('Presionar ENTER para continuar', res => {
            readLine.close()
            resolve();
        });

    })
}

module.exports = {
    showMenu,
    pause
}