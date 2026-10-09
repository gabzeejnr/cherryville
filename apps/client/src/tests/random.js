Array.prototype.myEvery = function (callback) {
    for (const i of this) if (!callback(i)) return false
    return true
}
Array.prototype.mySome = function (callback) {
    for (const i of this) if (callback(i)) return true

    return false
}
Array.prototype.myMap = function (callback) {
    const a = [];
    for (const i of this) a.push(callback(i))

    return a
}
Array.prototype.myFilter = function (callback) {
    const a = [];

    for (const i of this) if (callback(i)) a.push(i)
    return a.length ? a : undefined
};
Array.prototype.myFind = function (callback) {
    const a = [];

    for (const i of this) if (callback(i)) { a.push(i); break; }

    return a.length ? a : -1;
};
Array.prototype.myReduce = function (callback, initialValue) {

    Array.prototype.reduce((previousValue, currentValue) => { }, 0);

    for (const i of this) {
        callback(i)
    }
};





console.log("Every",
    [2, 4, 6].myEvery(num => num % 2 === 0),
    [2, 4, 7].myEvery(num => num % 2 === 0)
)
console.log("Some",
    [1, 3, 5, 8].mySome(num => num % 2 === 0),
    [1, 3, 5].mySome(num => num % 2 === 0)
)
console.log("Map",
    [1, 2, 3].myMap(num => num * 2),
    ["a", "b", "c"].myMap(letter => letter.toUpperCase())
)
console.log("Filter",
    [1, 2, 3, 4, 5, 6].myFilter(num => num > 3)
)
console.log("Find",
    [5, 12, 8, 20].myFind(num => num > 10)
)
console.log("Reduce",
    [1, 2, 3, 4].myReduce((total, num) => total + num, 0),
    [2, 3, 4].myReduce((total, num) => total * num, 1)
)
