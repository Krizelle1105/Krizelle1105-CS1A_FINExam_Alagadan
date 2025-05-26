let subArray1 = ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"];
let subArray2 = [24, 65, 21, 5, 9];

let multiDimensionalArray = subArray1.map((name, index) => [name, subArray2[index]]);

console.log("Restructured Multi-Dimensional Array:");
multiDimensionalArray.forEach(item => {
    console.log(item);
});