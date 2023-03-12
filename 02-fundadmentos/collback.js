let salarios = [
    {
        id:1,
        salario:1000
    },
    {
        id: 2,
        salario: 2000
    }
]

let getSalariosById = (id, callback) => {
  let salario = salarios.find(salary => salary.id === id)?.salario; 
  if(salario){
    callback(null,salario);
  }
  else{
    callback(`El id ${id} no existe en esta lista`)
  }
}

let id = 11;

getSalariosById(id, (err,salario) => {
    if(err){
        return console.log(err)
    }
    console.log(salario)
})