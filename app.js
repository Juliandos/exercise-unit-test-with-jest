// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Tasa de conversión desde 1 euro
let oneEuroIs = {
    "JPY": 156.5, // Yen japonés
    "USD": 1.07,  // Dólar estadounidense
    "GBP": 0.87   // Libra esterlina
};

// Función para convertir de euros a dólares
const fromEuroToDollar = (valueInEuro) => valueInEuro * oneEuroIs["USD"];

// Función para convertir de dólares a yenes
const fromDollarToYen = (valueInDollar) => {
    let valueInEuro = valueInDollar / oneEuroIs["USD"];
    return valueInEuro * oneEuroIs["JPY"];
};

// Función para convertir de yenes a libras
const fromYenToPound = (valueInYen) => {
    let valueInEuro = valueInYen / oneEuroIs["JPY"];
    return valueInEuro * oneEuroIs["GBP"];
};

// Exportar funciones
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };