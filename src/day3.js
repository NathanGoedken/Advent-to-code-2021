const testData = [
    '00100',
    '11110',
    '10110',
    '10111',
    '10101',
    '01111',
    '00111',
    '11100',
    '10000',
    '11001',
    '00010',
    '01010'
];

const getRates = () => {
    let gammaRateTotal = 0;
    let epsilonRateTotal = 0;

    let trackIndex = 0;
    let test;

    // This is not needed
    const getLongestValueInArray = testData.reduce((a, b) => a.length > b.length ? a : b);

    for (var i = 0; i < getLongestValueInArray.length; i++){
        console.log('getLongestValueInArray.charAt(i)', getLongestValueInArray.charAt(i));
        test = testData.map((value) => value[trackIndex]).join('');
        console.log('test', test);
        trackIndex++;
    }
    console.log('getLongestValueInArray', getLongestValueInArray);

    // code starts
    const magic = testData.map((value) => value[0]).join('');
    console.log('magic', magic);
};

console.log('getRates()', getRates());
