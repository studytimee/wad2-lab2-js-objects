const aCar = {
    owner: "Joe Bloggs",
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
console.log(aCar.owner + ' drives a ' + aCar.type.make )
console.log(' Car registration : ' + aCar.reg.year+''+aCar.reg.stage+'-'+aCar.reg.county+'-'+aCar.reg.number)