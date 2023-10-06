// singleton
// object constructor
/* Object.create */

//object literals
const mySm1 = Symbol("key1");
const jsUser = {
    name:"Srijan",
    age:20,
    location:"India",
    // to use symbols as keys we should use [symbol] in the key part.
    [mySm1]:mySm1

};

/* console.log(jsUser.name); */
//accessing object attributes is recommended with this notation  ["key"] because this is more flexibile.
/* console.log(jsUser["name"]); */

/* console.log(jsUser[mySm1]); */
/* Object.freeze(jsUser); */
// we use freeze to make the objects attributes unchangeable.
/* jsUser["name"]="Alex"; */
/* console.log(jsUser); */
jsUser["greeting"] = function () {
  return `Hello jsUser jsUser`;
};
jsUser["greeting2"] = function () {
  return `Hello jsUser ${this.name}`;
};

console.log(jsUser.greeting());
console.log(jsUser.greeting2());


