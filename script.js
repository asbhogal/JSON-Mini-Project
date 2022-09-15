let stockData = `[
    {
        "name" : "Auchentoshan American Oak",
        "quantity" : 148,
        "size" : "70cl",
        "country" : "Scotland",
        "bottling" : "Official",
        "price" : "56.99",
        "ordered" : false
    },
    {
        "name" : "Highland Harvest Organic Single Malt",
        "quantity" : 29,
        "size" : "70cl",
        "country" : "Scotland",
        "bottling" : "Independant",
        "ordered" : true
    },
    {
        "name" : "Willett's Pot Still Reserve Single Barrel Bourbon",
        "quantity" : 113,
        "size" : "70cl",
        "country" : "America",
        "bottling" : "Official",
        "ordered" : false
    },
    {
        "name" : "Kavalan Solist Vinho Barrique 072A (2015)",
        "quantity" : 19,
        "size" : "70cl",
        "country" : "Taiwan",
        "bottling" : "Official",
        "ordered" : false
    }
]`

                                            // ARRAY --> STRING --> JAVASCRIPT OBJECT

console.log(stockData);                     // THE RAW DATA RETURNED IS IN ARRAY FORMAT. ADDING BACKTICKS ABOVE THEN CONVERTS THIS TO A STRING
console.log(JSON.parse(stockData));         // THE .parse FUNCTION CONVERTS THIS STRING TO A JS OBJECT FOR MANIPULATION
console.log(JSON.parse(stockData)[2]);      // RETURNS THE THIRD ENTRY IN THE ARRAY