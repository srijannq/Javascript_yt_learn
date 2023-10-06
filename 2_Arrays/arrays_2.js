let marvelHeroes = ["Hulk", "captain America", "Iron Man"];
let dcHeroes = ["Superman", "flash", "batman"];
// when we are pushing a array it basically pushes the entire array as a single element similar to append in list in python.

// newHeroes=marvelHeroes.concat(dcHeroes);
// we can use concat to add one array to another element by element.
/* const newHeroes = [...marvelHeroes,...dcHeroes];
console.log(newHeroes); */
//  we can spread operator ... to spread the elements of the array and join it. This is the preferred way to join two or more arrays.

/* const anotherArray = [1,2,3,[56,"apple",43],[54,32,[4,5]]];
const anotherNewArray = anotherArray.flat(Infinity);
console.log(anotherNewArray); */
// we can use flat() method to take all the elements into the single array in case where the original array had multiple dimensions.

console.log(Array.isArray("Srijan"));

console.log(Array.from("Srijan"));
// from()method takes a iterable object and converts the elements of that object into invidual elements of the array  but in case of objects we need to specify which key or value we want to create the value of array of.
console.log(Array.from({name:"Srijan"}));// cautionary case we need to specify the key the output in this case the result was a empty array.

const num1 = 100;
const num2 = 200;
const num3 = 300;
console.log(Array.of(num1, num2, num3));
// from takes the elements from which the array has to be created while from takes a iterable object
/* console.log(Array.from(num1, num2, num3)); */ // this resulted in an error.

