const aCar = {
    owner: "Joe Bloggs",
    previous_owners: [
        "Alex Smith   - 1 Main Street",
        "John Fleming - 2 High Street "
    ],
    type: {
        make: 'Toyota',
        model: 'Corolla',
        cc: '1.8',
    },
    reg: {
        year: '20',
        stage: '1',
        county: 'WD',
        number: '1058',
    }


};

// Add a new property
aCar.mileage = '10000';
aCar.colour = {
    exterior: 'Red',
    interior: {
        texture: 'Leather',
        shade: 'Cream',
    }
}

console.log('First Owner: ' + aCar.previous_owners[0])

// console.log(aCar.owner + ' drives a ' + aCar.type.make)
// console.log(' Car registration : ' + aCar.reg.year + '' + aCar.reg.stage + '-' + aCar.reg.county + '-' + aCar.reg.number)

// console.log(' Car Colour : ' + aCar.colour.exterior)
// console.log(' Interior Fabric Texture: ' + aCar.colour.interior.texture)
// console.log(' Interior Fabric Shade: ' + aCar.colour.interior.shade)

// console.log(' It is a ' + aCar.colour.exterior + ' colour, ' + aCar.mileage + ' mileage, with ' + aCar.colour.interior.texture + ' interior.')

