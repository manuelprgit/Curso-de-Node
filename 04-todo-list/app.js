require("colors");

const { showMenu,pause } = require('./helpers/mensajes'); 

console.clear();

const main = async() => {
    option = '';
    do{
       
        option = await showMenu();
        console.log(option)
        await pause();
    } while(option !== '0')

}

main();