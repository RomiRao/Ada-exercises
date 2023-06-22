// Capitalizar

console.log('Ej Capitalizar')

const capitalizar = (str) => {
    console.log(str.charAt(0).toUpperCase() + str.slice(1))
}

capitalizar('lovelace') // 'Lovelace'
capitalizar('había una vez...') // 'Había una vez...'

//Hacker Speak

console.log('Ej. Hacker Speak')

const aHackerSpeak = (str) => {
    console.log(str.replaceAll(/[aA]/g, '4').replaceAll(/[eE]/g, '3').replaceAll(/[iI]/g, '1').replaceAll(/[sS]/g, '5').replaceAll(/[oO]/g, '0'))
}

// - Las i se transforman en 1
// - Las e se transforman en 3
// - Las a se transforman en 4
// - Las s se transforman en 5
// - Las 0 se transforman en 0

aHackerSpeak('javascript') // 'j4v45cr1pt'
aHackerSpeak('soy una hacker') // '50y un4 h4ck3r'
aHackerSpeak('ADA LOVELACE') // '4D4 L0V3L4C3'

//Primera Oracion

console.log('ej. Primera Oracion')

const obtenerPrimeraOracion = (str) => {
    console.log(str.split('.')[0])
}

obtenerPrimeraOracion('A mí no me preguntes, sólo soy una oración') // 'A mí no me preguntes, sólo soy una oración'
obtenerPrimeraOracion('Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.') // 'Tengo varias oraciones.'

//Ocultar contrasenia

console.log('Ej. Ocultar contrasenia')

const ocultarContrasenia = (contrasenia) => {
    const str = contrasenia.toString();
    const replaced = str.replaceAll(/[0-9]/g, '*');
console.log(replaced); 
}

ocultarContrasenia(123456) // '******'
ocultarContrasenia(111222333) // '*********'

//Espaciar Caracteres

console.log('Ej espaciar los caracteres')

const espaciarCaracteres = (str) => {
    console.log(str.split("").join(" "))
}

espaciarCaracteres('javascript') // 'j a v a s c r i p t'
espaciarCaracteres('ada lovelace') // 'a d a l o v e l a c e'