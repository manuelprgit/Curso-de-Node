const fs = require('fs');

let allTablasMutiplicar = (base,listar,hasta) => {
    let tablaMultiplicar = '';
    for (let i = base; i <= hasta; i++) {
        tablaMultiplicar += `Tabla del ${i}\n`
        for (let o = 1; o <= 12; o++) {
            tablaMultiplicar += `${i} x ${o} = ${i * o}\n`
        }
    }
    if(listar) console.log(tablaMultiplicar)

    fs.writeFile(`tablar-del-${base}.txt`, tablaMultiplicar,err=>{
        if(err) throw err;
        return `tabla del ${base} creada`;
    })

}

let multiplicar = async(base,listar = false, hasta) => {

    try {   
        console.log("====================")
        console.log(`La tabla del ${base}`)
        console.log("====================")
        let tabla = ''
        for (let i = 1; i <= hasta; i++) {
            tabla += `${i} x ${base} = ${i * base}\n`;
        }
        if(listar) console.log(tabla);

        fs.writeFile(`./multiplicar/tabla-del-${base}.txt`, tabla, (err) => {
            if (err) throw err;
        })
        return `tabla-de-${base}.txt Creada`;
    } catch (error) {
        return error;
    }
}





module.exports = {
    multiplicar,
    allTablasMutiplicar
}