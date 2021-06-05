
// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convert the given valueInDollar to yens
    let valueInYen = valueInDollar * 109.55;
    //return the dollar value
    return valueInYen;
}

const fromYenToPound= function(valueInYen){
    // convert the given valueInYen to pounds
    let valueInPound = valueInYen * 0.0064;
    //return the dollar value
    return valueInPound;
}

// we include fromEuroToDollar here as well because it needs to be exported
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }