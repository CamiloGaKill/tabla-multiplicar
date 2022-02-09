/* const { argv } = require('process'); */
const colors = require('colors');
const { options } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar')

const argv = require('./config/yargs');

console.clear();

console.log( argv );

crearArchivo( argv.b, argv.l, argv.h )
   .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
   .catch( err => console.log(err) );
