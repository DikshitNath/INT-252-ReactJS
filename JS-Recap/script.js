// var a = 10;
// console.log(a);
// a = "20";
// console.log(a);

// let b = 30;
// console.log(b);
// b = "node";
// console.log(b);

// const c = 40;
// console.log(c);

// c = 'js';
// console.log(c);

// let arr1 = [10, 20, 30, 40];
// let arr2 = [50, 60, 70, 80];
// let arr3 = ['a', 'b', 'c', 'd'];
// let arr4 = arr1.concat(arr2, arr3);
// console.log(arr4);

// arr1.forEach((ele)=>{
//     console.log(ele);
// });

// let res = arr1.every((ele)=>{
//     return ele<40;
// });
// console.log(res);

// let res = arr1.filter((ele)=>{
//     return ele>20;
// });
// console.log(res);

// let res = arr1.find((ele)=>{
//     return ele>10;
// });
// console.log(res);

// let arr1 = [{
//     name: "js",
//     version: "es6",
//     type: "frontend"
// },
// {
//     name: "ts",
//     version: "v4",
//     type: "frontend"
// }];
// let arr2 = [{
//     name: "node",
//     version: "v18",
//     type: "backend"
// },
// {
//     name: "express",
//     version: "v6",
//     type: "framework"
// }];

// let res = arr1.concat(arr2);
// console.log(res);

// let arr = [2, 4, 6, 8];

// console.log(arr.every((ele)=> ele%2==0));

// let str = ["aple", "Ayush", "Amar", "Abhay"];
// console.log(str.every((ele)=> ele.toLowerCase().startsWith('a')));
// let res1 = str.filter((ele)=> ele.length>4);
// console.log(res1);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = arr.filter((ele)=> ele%2 === 0);
// console.log(res);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.find((ele)=> ele%2 === 0));

// let arr = [
//     {name:"Apple", id: 1},
//     {name: "Banana", id: 2},
//     {name: "Mango", id: 3}
// ];

// let res = arr.find((ele)=> ele.id === 2);
// console.log(res);


// let str = "banana";
// console.log(str.indexOf('a'));

// let arr = [2, 4, 6, 8];
// console.log([1, 2, 3, 4].reduce((a, b)=> a+b));
// console.log(arr.reverse());

// function add(... nums){
//     return nums.reduce((a, b)=> a+b);
// }
// console.log(add(1, 2, 3, 4));

// import {studentData} from "./studentdata.js";
// console.log(studentData);

// class Car{
//     constructor(brand, model, year){
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }
//     display(){
//         console.log(`This is a ${this.brand} ${this.model} from ${this.year}`);
//     }
//     start(){
//         console.log("Car started");
//     }
// }

// class ElectricCar extends Car{
//     constructor(batteryLife, brand, model, year){
//         super(brand, model, year);
//         this.batteryLife = batteryLife;
//     }
//     start(){
//         console.log("Electric Car started silently");
//     }
// }

// let car = new Car("Toyota", "Corolla", 2023);
// let electricCar = new ElectricCar("Tata", "Nexon", 2023, 100);
// car.display();
// electricCar.display();
// electricCar.start();

import add from "./math.js";
console.log(add(10, 20));