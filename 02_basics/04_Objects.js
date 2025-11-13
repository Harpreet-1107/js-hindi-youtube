//const tinderUser = new Object()    // singleton object
const tinderUser = {}//non singleton object

console.log(tinderUser);

tinderUser.id ="123abc"
tinderUser.name = "jassi"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const linkedinUser = {
    email: "some@gmail.com",
    fullname: {
      userfullname: {
        firstname: "Harpreet",
        lastname: "kour"
      }
    }

}

//console.log(linkedinUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1, obj2}
// console.log(obj4)

// const obj4 =Object.assign({}, obj1, obj2, obj3);
// console.log(obj4);

const obj4 = {...obj1, ...obj2, ...obj3}//spread operator is used here
//console.log(obj4);

const users = [
    {
    id:1,
    email:"jfbasfjh"
    },
     {
    id:1,
    email:"jfbasfjh"
    },
     {
    id:1,
    email:"jfbasfjh"
    },
     {
    id:1,
    email:"jfbasfjh"
    }

]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

// de structure lecture 18

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

const {courseInstructor: instructor} = course;
// console.log(courseInstructor);
console.log(instructor);

//JSON API into

// {
//     "name":"harpreet",
//     "coursename":"js in hindi",
//     "price":"free"
// }

[
    {},
    {},
    {}    
]