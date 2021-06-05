describe ('Grupo de casos función de conversión de divisas' , () => {

    //euro to dollar
    test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(dollars);
    })

    //dollar to yen
    test("One yen should be 109.55 dollars", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yens = fromDollarToYen(3.5)

    // if 1 yen are 109.55 dollars, then 3.5 dollar should be (3.5 * 109.55)
    const expected = 3.5 * 109.55; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(yens);
    })

    //yen to pound
    test("One yen should be 0.0064 dollars", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pounds = fromYenToPound(3.5)

    // if 1 yen are 0.0064 pounds, then 3.5 yens should be (3.5 * 1.2)
    const expected = 3.5 * 0.0064; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(pounds);
    })
})

