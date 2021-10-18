let statistics = { 
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
};
for (const item in statistics) {
    if (statistics[item] %2 === 1 || item[0] === 'r') {
        console.log(statistics[item]);
    }
}