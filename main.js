
const flowers = [
    {
        id: 1,
        type: "Rose",
        colors: ["White", "Red", "Violet", "Pink", "Black", "Yellow"],
        price: 2.59,
        usdaZones: [3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        id: 2,
        type: "Tulip",
        colors: ["Orange", "White", "Yellow", "Violet", "Red"],
        price: 1.04,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 3,
        type: "Daisy",
        colors: ["Gold", "White", "Orange", "Crimson"],
        price: 0.89,
        usdaZones: [3, 4, 5, 6, 7, 8]
    },
    {
        id: 4,
        type: "Carnation",
        colors: ["Peach", "Yellow", "Magenta", "Pink", "Coral"],
        price: 1.59,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 5,
        type: "Bird of Paradise",
        colors: ["Orange", "White"],
        price: 2.33,
        usdaZones: [9, 10, 11]
    },
    {
        id: 6,
        type: "Delphinium",
        colors: ["Blue", "Violet", "White", "Pink"],
        price: 1.67,
        usdaZones: [3, 4, 5, 6, 7]
    },
    {
        id: 7,
        type: "Gladiolus",
        colors: ["White", "Cream", "Yellow", "Red", "Pink", "Green", "Lavender", "Voilet"],
        price: 1.85,
        usdaZones: [6, 7, 8, 9, 10]
    },
    {
        id: 8,
        type: "Lilly",
        colors: ["White", "Yellow", "Orange", "Red", "Pink", "Lavender"],
        price: 1.52,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    },
    {
        id: 9,
        type: "Chinese Lantern",
        colors: ["Orange"],
        price: 2.33,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    }
]

/*
    Below are some functions, in which you will write ALL of your
    code. Do not modify the code that defines the functions, and
    do not write any code outside of the functions.
*/


/*
    This function should return inexpensive flowers - ones that cost
    less than 2.00 per flower.
*/
// What criteria am I sorting by?
const inexpensiveFlowers = () => {
    const filteredFlowers = []  // Do not modify




    //Iterate through object
    //Iterate through price of each object
    //Filter based on criteria of < $2


    for (const flowerObject of flowers) {
        if (flowerObject.price < 2) {
            filteredFlowers.push(flowerObject)


        }
    }


    return filteredFlowers  // Do not modify

}

inexpensiveFlowers()
/*
    This function should return flowers that grow in
    USDA zones of 3 and 8.
*/
const zoneFlowers = () => {
    const filteredFlowers = []  // Do not modify


    // Write your algorithm first, and then your code. Feel free to remove this comment
    //Iterate through each object
    //Iterated through zones of each object
    //returns objects based on criteria
    //??Unsure if I need to call zoneFlowers()
// I want all of the flowers that grow in either zone 3 or zone 8
// I want all of the flowers that grow in zone 3 and zone 8
    for (const zonesObject of flowers) {
        if (zonesObject.usdaZones.includes(3) && zonesObject.usdaZones.includes(8)) {
            filteredFlowers.push(zonesObject)

        }

        // console.log(filteredFlowers)
    }




    return filteredFlowers  // Do not modify
}

zoneFlowers()


/*
    This function should return flowers that come in the color Orange
*/
const orangeFlowers = () => {
    const filteredFlowers = []  // Do not modify



    // Write your algorithm first, and then your code. Feel free to remove this comment
    //Set criteria
    // Interate through each object
    //Iterate through each colors array in serch of criteria of "Orange" **case sensitive**
    //Push criteria of "Orange" into empty filteredFlowers array
    //Return filteredFlowers array
    //??Unsure if I need to call the orangeFlowers function??

    const criteria = "Orange"

    for (const color of flowers) {
        for (const filter of color.colors) {
            if (filter === criteria) {
                filteredFlowers.push(color)
            }
            // console.log(filteredFlowers)
        }
    }

    return filteredFlowers  // Do not modify
}

orangeFlowers()

/*
    This function should return an HTML representation of each flower.

    Expected string format:
        <article>
            <h1>Bird of Paradise</h1>

            <h2>Colors</h2>
            <section>White</section>
            <section>Orange</section>

            <h2>USDA Zones</h2>
            <div>9</div>
            <div>10</div>
            <div>11</div>
        </article>
*/
// Iterate through each flower array
// Use an HTML <article> tag for each flower
// Iterate through each  flower's color
// Use an HTML <section> tag to denote colors
// Iterate through each flower's USDA zone
// Use an HTML <div> tag to denote zone
const flowersAsHTML = () => {
    let flowersHTMLString = ""  // Do not modify

    for (const flower of flowers) {
        flowersHTMLString += `<article>${flower.type}\n`
        for (const flowerColor of flower.colors) {
            flowersHTMLString += `<section>${flowerColor}</section>\n`
            
        }
        for (const flowerZone of flower.usdaZones) {
            flowersHTMLString += `<div>${flowerZone}</div>\n`
        }
        flowersHTMLString += "</article>"
    }
    /*
        Algorithmic thinking is most important on this one.
        We would rather see the correct algorithm than the
        correct code. If you have code that works, but no
        algorithm, then you failed the exercise.
    */


    return flowersHTMLString  // Do not modify
}
console.log(flowersAsHTML())















































































/*  DO NOT TOUCH THIS CODE  */
const getFlowers = () => flowers
module.exports = {
    inexpensiveFlowers, orangeFlowers, zoneFlowers, flowersAsHTML
}
/*  DO NOT TOUCH THIS CODE  */

