console.log('inicio de programa')

setTimeout((e) => {
    console.log('primer timeout');
}, 2000);

setTimeout((e) => {
    console.log('seguno timeout');
}, 0);

setTimeout((e) => {
    console.log('tercero timeout');
}, 0);

console.log('fin de programa')

