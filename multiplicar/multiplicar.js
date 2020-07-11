const fs = require('fs');
const colors = require('colors');

const listarTabla = (base, limite) => {
    base = base == '0' ? 0 : base;
    if (!Number(base)) {
        throw `La base ${base} no es un número`;
    }
    if (!Number(limite) || limite * 1 < 1) {
        throw `El límite debe ser un número mayor que cero. límite ingresado ${limite}`;
    }

    for (let i = 1; i <= limite; i++) {
        console.log(`${base}*${i} = ${base * i} \n`.green);
    }

};

// module.exports.crearArchivo = (base)=> {...} 
const crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        base = base == '0' ? 0 : base;
        if (!Number(base)) {
            reject(new Error(`La base ${base} no es un número`));
            return;
        }

        if (!Number(limite) || limite * 1 < 1) {
            reject(new Error(`El límite debe ser un número mayor que cero. límite ingresado ${limite}`));
            return;
        }
        let tabla = '';
        for (let i = 1; i <= limite; i++)
            tabla += `${base}*${i} = ${base * i} \n`;

        // const data = new Uint8Array(Buffer.from('Hello Node.js')); //puede ser un texto simple; 
        fs.writeFile(`./tablas/tabla_base_${base}_limite_${limite}.txt`, tabla, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla_base_${base}_limite_${limite}.txt`);
        });
    })


}

module.exports = {
    crearArchivo,
    listarTabla
}