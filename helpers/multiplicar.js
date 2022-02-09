const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {
        let s, c = '';

        for (let i = 1; i <= hasta; i++) {
            /* console.log(`${ z } * ${ i } = ${z*i}`) */
            s += `${ base } * ${ i } = ${base * i} \n`;
            c += `${colors.blue(base)} ${ '*'.green } ${colors.red(i)} ${ '='.yellow } ${base * i} \n`;
        }

        if (listar) {
            console.log('==========================='.green);
            console.log('Tabla del:'.green, colors.blue( base ) +  ' hasta:'.green, colors.blue( hasta ));
            console.log('==========================='.green);

            console.log(c);
        }        

        /* fs.writeFile( 'Tabla_3.txt', s, (err) => {
            if(err) throw err;
            console.log(`tabla_${ z }.txt creado`);
        } ); */

        fs.writeFileSync(`./salida/tabla_${base}.txt`, s);

        return `tabla_${base}.txt`
    } catch (err) {
        throw err;
    }


}

module.exports = { crearArchivo }