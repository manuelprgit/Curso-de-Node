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
            setTimeout(() => {
                resolve(salario)
            }, 2000);
        }
        else{
            reject('El ID para este salario no existe');
        }
    }) 
}
let id = 4;
let getInfoUsusario = async(id) => {
  let usuario = await getEmpleado(id)
  let salario = await getSalario(id)
  return `el usuario ${usuario} tiene un salario de ${salario}`
}
getInfoUsusario(id)
    .then(res=> console.log(res))
    .catch(err => console.log(err))