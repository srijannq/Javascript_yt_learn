const tinderUser = new Object();
tinderUser.id = "123@";
tinderUser.name = "Srijan";
tinderUser.grade = "8";
const regularUser = {
    email:"hello@gmail.com",
    Name:{
        userFullname:{
            firstName:"Srijan",
            lastName:"Mitra"
        }
    }
}

/* console.log(regularUser.Name.userFullname.lastName); */
// we can use ? mark after the attribute to indicate to the program to check if the key exists so it doesn't give us a error. it will output undefined if the key is not there.
const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"b"};
const obj3 = {...obj1,...obj2};
/* console.log(obj3); */
console.log(tinderUser);
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("nameo"));
