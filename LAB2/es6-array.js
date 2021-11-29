const cars = ["Toyota","Honda","Mazda"]
const fruits = [];
fruits[0] = "Apple";
fruits[3] = "Mango";
const rname = new Array("Win","John","Jame")
console.log(fruits);

const carpop = cars.pop();
console.log(carpop);
console.log(cars);

cars.push("Kubota");
console.log(cars);

const carshift = cars.shift();
console.log(carshift);
console.log(cars);

cars.unshift("Mazda");
console.log(cars);

const slidearr = cars.slice(0,2);
console.log(slidearr);
