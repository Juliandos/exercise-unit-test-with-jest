// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

// Exportar funciones
module.exports = { sum, fromEuroToDollar };