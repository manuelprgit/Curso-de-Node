let persona = [
    {
        id:1,
        name: 'Manuel'
    },
    {
        id:2,
        name: 'Dariel'
    },
    {
        id:3,
        name: 'Kamel'
    }
]
let salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
]

let getEmpleado = (id) => {
  return new Promise((resolve, reject) =>{
    let empleado = persona.find(person => person.id === id)?.name;
    if(empleado){
        resolve(empleado)
    }else{
        reject('Este ID no es valido');
    }
  })
}

let getSalario = (id) => {
    return new Promise((resolve, reject)=>{
        let salario = salarios.find(s => s.id === id)?.salario;

        if(salario){
            resolve(salario)
        }
        else{
            reject('El ID para este salario no existe');
        }
    })
  
}
let id = 3
let nombre;
getEmpleado(id)
    .then(res=> {
        nombre = res;
        return getSalario(id);
    })
    .then(res=>{
        console.log(`El empleado ${nombre} gana ${res} pesos`);
    })
    .catch(err=> console.log(err));