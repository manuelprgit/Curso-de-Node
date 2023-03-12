let obj = {
    name: 'manuel',
    surname: 'perez',
    getFullName(){
        return `el nombre es ${this.name} y si apellido es ${this.surname}`;
    },
    direccion: 'su casa'
}

let {name, surname} = obj;

console.log(name);

let lista = ['banana','pera','manzana']

const [h1,h2,h3] = lista;

console.log(h1,h2,h3)