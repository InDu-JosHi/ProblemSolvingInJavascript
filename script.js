////Program to reverse a string.
// function myfunc(str){
//     let a= str.length-1;
//     let w="";
//     for(i=a; i>=0; i=i-1){
//         w += str[i];
//     }
//     return w;
// }
// let abc= myfunc("apple");
// console.log(abc);



// console.log("program to reverse a number.")
// let r=0;
// let w=0;
// function myfunc(num){
//     while(num!==0){
//         r= num % 10;
//         w= w*10 + r;
//         num = Math.floor(num/10);
//     }
//     return w;
// }
// let abc= myfunc(123);
// console.log(abc);



// let array= [1,2,3,4,5];
// let sum=0;
//     let a= array.length-1;
//     for(i=0;i<=a;i++){
//         sum=sum+array[i];
//     }
//     console.log(sum);


// let x= "";
// let y= "";
// function mystring(str){
//     let a= str.length-1;
//     for(i=a;i>=0;i--){
//       x=str[i];
//       y=y+x;
//     }
//     return y;
// }
//  let abc= mystring("apple");
//  console.log(abc);

// let sum = 0;
// let array= [];
// function myarray(array){
//     let a= array.length-1;
// for(i=0;i<=a;i++){
//     if(array[i]>0){
//         sum = sum + array[i];
//     }
// }
// return sum;
// }
// let abc =[1,2,3,-8,-3,-1];
// console.log(myarray(abc));

// let c= 0;
// function prime(num){
//     for(i=1;i<=num;i++){
//         if(num%i===0){
//             c= c+1;
//         }
//     }
//     if(c==2){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// let abc= prime(17);
// console.log(abc);


// let array=[];
// let c= 0;
// let b=0;
// function check(array){
//     let a=array.length;
//     for(let i=0;i<a;i++){
//         if(array[i]===0){
//              c=c+1;
//         }
//         else{
//             b=b+1;
//         }
//     }
//     if(c>=1){
//         return "Yes";
//     }
//     else{
//         return "No";
//     }
// }
// let abc = [1,3,2,0,7];
// console.log(check(abc));



// let myArray= [];
// function check(myArray){
//     let newArray =[];
//     let a= myArray.length;
//     for(let i=0;i<a;i++){
//         if(myArray[i]%2!==0){
//           newArray.push(myArray[i]);
//         }
//     }
//     return newArray;
// }
// let abc= [1,4,5,6,7,8,9,12,33];
// console.log(check(abc));


// function remove(sentence){
//   let newSentence = "";
//   let a = sentence.length;
//   for(let i=0;i<a;i++){
//     if(sentence[i]!=="A" && sentence[i]!=="E" && sentence[i]!=="I" && sentence[i]!=="O" && sentence[i]!=="U" && sentence[i]!=="a" && sentence[i]!=="e" && sentence[i]!=="i" && sentence[i]!=="o" && sentence[i]!=="u"){
//      newSentence += sentence[i];
//     }
//   }
//   return newSentence;
// }
// let removedVowel = remove("Hello World");
// console.log(removedVowel);

// let c=0;
// let num=0;
// function primeNumber(){
//     num = +prompt("Enter a number:");
//     for(let i=1; i<=num; i++){
//         if(num%i===0){
//             c= c+1;
//        }
//     }
//     if(c==2){
//         return `${num} is a prime number.`
//     }
//     else{
//         return `${num} is a composite number.`
//     }

// }
// console.log(primeNumber());


  // function replaceVowels(sentence) {
  //   // define an array of vowels
  //   const vowels = ['a', 'e', 'i', 'o', 'u'];
  //   // initialize an empty string to store the result
  //   let result = '';
  //   // initialize a variable to keep track of the last vowel index
  //   let lastVowelIndex = null;
  
  //   // loop through the sentence
  //   for (let i = 0; i < sentence.length; i++) {
  //     const char = sentence[i];
  //     // check if the character is a vowel
  //     if (vowels.includes(char.toLowerCase())) {
  //       // find the next closest vowel in the sentence
  //       let nextVowelIndex = i + 1;
  //       while (nextVowelIndex < sentence.length && !vowels.includes(sentence[nextVowelIndex].toLowerCase())) {
  //         nextVowelIndex++;
  //       }
  //       if (nextVowelIndex === sentence.length) {
  //         // if there is no next vowel, wrap around to the first vowel
  //         nextVowelIndex = 0;
  //       }
  //       // get the next closest vowel
  //       const nextVowel = sentence[nextVowelIndex].toLowerCase();
  //       // add the next closest vowel to the result
  //       result += nextVowel;
  //       // update the last vowel index
  //       lastVowelIndex = nextVowelIndex;
  //       // skip over the next vowel
  //       i = nextVowelIndex;
  //     } else {
  //       // add the non-vowel character to the result
  //       result += char;
  //     }
  //   }
  
  //   // replace the last vowel with the first vowel in the sentence
  //   if (lastVowelIndex !== null) {
  //     result = result.slice(0, lastVowelIndex) + sentence.charAt(0).toLowerCase() + result.slice(lastVowelIndex + 1);
  //   }
  
  //   return result;
  // }
  
  // // example usage:
  // console.log(replaceVowels("Hello World")); // output: "Hollo Werld"
  


//// Create a function Declaration called describeYourState Which take three parameters Population, traditional food and historical place. Based on this input function should return a String with this format.

//My state population is * Its traditional food is * and historical place name is _

  // const describeYourState = function (population, traditionalFood, historicalPlaces){
  //   console.log(`My state population is ${population} Its traditional food is ${traditionalFood} and historical place name is ${historicalPlaces}.`)
  // }
  // describeYourState(1000, "DallBhat", "ShivMandir");



  //Create function addition which takes two numbers as an argument And return the result of sum of two numbers

 // Important Note: In the function call you are not passing any parameter. You can modify function to achieve this.

//  let sum =0;
//  function addition(a=5,b=6){
//   sum = a+b;
//   console.log (sum);
//  }
// addition();


//Identify which type of value passed below into the function greet(). What will be the return value of greet ?

// let person = {
//   name: 'john',
//   age: 25,
// };

// function greet(person) {
//   person.name =`Mr ${person.name}` ;

//   return ` Welcome ${person.name}`;
// }
// console.log (greet(person));



//Create higher order function named as transformer which take string and firstUpperCaseWord function as an arguments. firstUpperCaseWord is function which make first word UpperCase from a given String.


// function transform(string, firstUpperCaseWord){
//  let transformed = firstUpperCaseWord(string);
//  return transformed;
// }
// function firstUpperCaseWord(string){
//   let a= string.length;
//   let n = string.indexOf(" ");
//   let firstWord = string.slice(0,n);
//   firstWord = firstWord.toUpperCase();
//   let restWord  = string.slice(n,a);
//   return `${firstWord}${restWord}`;
// }
// let abc= transform("earth is round", firstUpperCaseWord);
// console.log(abc);




//create function which will display Your name after every 5 seconds

// function myname(){
// console.log("Indu Joshi");
// };
// setInterval(myname,5000);


// //Guess the Output And Explain Why?
// let arrowFunction = (name = 'Coders') => {
//   `Welcome ${name}`; // include return
// };

// console.log(arrowFunction('Programmers'));



//Create a JavaScript Function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. : Area = Square root of√s(s - a)(s - b)(s - c) where s is half the perimeter, or (a + b + c)/2.

// function area(a,b,c){
//   let s= (a+b+c)/2;
//   let are = s*(s-a)*(s-b)*(s-c)
//   let A = Math.sqrt(are);
//   return A;
// }
// console.log(area(5,6,7));



// //Create a JavaScript Function to capitalize the first letter of each word of a given string.
// //input: capitalize('we are the champions');
// //output: 'We Are The Champions';
// let str = "we are the champions";
// let words = str.split(" ");
// for (let i = 0; i < words.length; i++) {
//   words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
// }
// let capitalizedString = words.join(" ");
// console.log(capitalizedString);






//Guess the Output And Explain ?
//console.log(Math.round(Math.random() * 10));




//Create an object called country for a country of your choice, containing properties name , capital, language, population and neighbors
////Increase the country population by two million using dot notation.
////Decrease the country population by one million using bracket notation.
// //Make language value in Uppercase

// const country = {
//    name : "Nepal",
//    capital:"Kathmandu",
//    language: "Nepali",
//    population : 2000,
//    neighbors : "India and China"
// }
// //country.population += 2000;
// country["population"] += 3000;
// console.log(country);


////Guess the Output and explain Why?
// let car = {
//   color: 'Blue',
//   model: 2021,
//   company: 'Toyota',
// };
// let carColor = 'color';
// console.log(car[carColor]);
// console.log(car.carColor);

//Create a method describeCar inside car object in which you have to print like this in console using template literals Company of my car is * . It color is And Model of my car is __*

// const car ={
//   company:"Toyota",
//   color : "blue",
//   model: 211,
//   describeCar : function(){
//     return `Company of my car is ${this.company}. It's color is ${this.color} and model of my car is ${this.model}.`;
//   }
// };
// console.log(car.describeCar());

//Generate random numbers between 0 and 10 using trunc method of MATH object

// function getRandomNumbers(){

//   let number = Math.trunc(Math.random()*11);
//   return number;
// }
// let abc = getRandomNumbers();
// console.log(abc);


//Guess the Output and Explain Why?
// let  arr  = [1,2,3,4];

// arr.forEach((element)=>{
// if(element == 1){
//   break;
// }
// console.log(element);

// });


//You have given array of strings. Your task is to obtain last two elements of given array using slice method?
//Input;
//let admins = ['john', 'paul', 'Neha', 'harry'];
//Ouput[('Neha', 'harry')];

// const string = ['john', 'paul', 'Neha', 'harry'];
// const str =[];
// function mystring(str){
//    let a= string.length;
//    let result = str.slice([a-2],a);
//    return result;
// }
// console.log(mystring(string));



//You have given an array of 5 elements(1-5). Your task is defined as below.
//const arr = [1, 4, 7, 6, 8];
// You have to delete 2 elements starting from index 2.
// You have to add 3 new elements on index 1 choice.
// Display the 2 deleted elements in console (from step 1)

// const arr = [1,4,7,6,8];
// function myarr(arr){
//   let deletedItem = arr.splice(2,2);
//   console.log(arr);
//   arr.splice(1,1,22,33,44);
//   console.log(arr)
//   console.log(`Deleted elemnts are ${deletedItem}`);
// }
// myarr(arr);


//What happens if we use negative number inside slice method?

// const arr = [1, 4, 7, 6, 8];
// console.log(arr.slice(-2));


// //Write three different methods/approaches to get last element of the array?
// const arr = [1, 4, 7, 6, 8];
// //using array index
// let a= arr.length-1;
// console.log(arr[a]);
// //using slice
// console.log(arr.slice(-1));
// //using pop()
// let poped = arr.pop();
// console.log(poped);


//You have given an array of nums. Create new Array with the help of nums array. In new Array each element will be a result of multiplication by 2 of the original array element

// const arr = [1, 4, 7, 6, 8];
// Example: Input;

// let nums = [1, 2, 3, 4, 5];

// output;

// updatedNums = [2, 4, 6, 8, 10];


//using for of loop
//const arr =  [1, 2, 3, 4, 5];
// let newValue;
// const newArray =[];
// function mul(arr){
//   for(ar of arr){
//     newValue = 2 * ar;
//     newArray.push(newValue);
//   }
//   return newArray;
// }
// console.log(mul(arr));

//using map
//const arr =  [1, 2, 3, 4, 5];
// function mul(ar){
//   return 2*ar;
// }
// let multiply = arr.map(mul);
// console.log(multiply);

//or
// let mul = arr.map((ar)=>{
//   return 2*ar;
// });
// console.log(mul);



//You have given an array of scores in which score of each student stored. Create a new array with the help of original scores array in which only those scores exist greater than 75%

// const scores = [10, 40, 70, 60, 80];
// let highScore = scores.filter((score)=>{
//   if(score>75){
//     return score;
//   }
// })
// console.log(highScore);


//You have given an array of numbers nums. You have to find sum of all array elements using reduce method?

// let nums = [2, 3, 5, 2, 8];
// const sum = nums.reduce((updatedValue, currentValue)=>{
//   return updatedValue + currentValue;
// },0);
// console.log(sum);



// //You have given an array of numbers nums. You have to find the index of value 8 using built-in method of array?

// let nums = [2, 3, 5, 6, 8, 6, 4, 8];
// // let findIndex = nums.indexOf(8);
// // console.log(findIndex);

// let findIndex = nums.findIndex((num)=>{
//   return num===8;
// });
// console.log(findIndex);



// You have given an array of objects of users as below. Find the specified user with name = "John" 
// Also find the position (index) of that user inside the array?

// let users = [
//   {  name: 'Paul',
//     age: 24,
//     verified: true,
//   },
//   { name: 'John',
//     age: 21,
//     verified: false,
//   },
//   { name: 'Neha',
//     age: 19,
//     verify: true,
//   },
// ];

// const userName= users.find((user)=>{
//   return user.name === "John";
// })
// const userIndex = users.findIndex((user)=>{
//  return user.name === "John";
//  })
// console.log(userName);
// console.log(userIndex);






//Guess the Output and explain Why?

// let nums = [1, 2, 4, 5, [6, [8]], [9, 0]];

// let res1 = nums.flat(1);

// let res2 = nums.flatMap((elem) => elem);

// console.log(res1, res2);




//You have given an array of nums. Write a program to sort the elements of array in descending order using built-in method of array.

// let nums = [5, 1, 4, 6, 8, 3, 9];
// let sortedArray = nums.sort((a,b)=>{
//   return b-a;
// });
// console.log(sortedArray);

//Output[(9, 8, 6, 5, 4, 3, 1)];




//Guess the Output and Explain Why?

// let arr = [1, 2, 3, 4];
// let result = arr.splice(1, 2).pop();
// console.log(result);



// //You have given an array of numbers nums You have to check if all elements of the array > 15 using built-in array method. return true or false

// let nums = [16, 17, 18, 28, 22];
// const checkElement = nums.every((num)=>{
//    return num>15;
//   });
// console.log(checkElement);


// ////flatMap()
// const students = [
//   {name:"Indu", score:[60,77,89]},
//   {name:"Milan", score:[69,70,89]},
//   {name:"Kabita", score:[78,87,39]}
// ]
// const studentAverage = students.flatMap((student)=>{
//   const averageScore = student.score.reduce((sum,marks)=> {
//   return sum+marks},0)/student.score.length;
//   return [student.name, averageScore];
// });
// console.log(studentAverage);



// //Guess the Output And explain Why?
// let strArray = [1, 2, 3, 4, 5];
// let result = strArray.reverse();
// console.log(result == strArray);



//You have given two arrays below as an example. Your task is to combine them into one By using array method.
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let newArray = [...arr2,...arr1];
// //let newArray = arr2.concat (arr1)
// console.log(newArray);
// //ouput[(6, 7, 8, 9, 10, 1, 2, 3, 4, 5)];


// //You have given an array of letters below. Convert that array into string of letters Without Space
// let arr = ['a', 'b', 'h', 'i', 's', 'h', 'e', 'k'];
// let newString = arr.join("");
// console.log(newString);


// //Guess the Output and explain why?
// let arr = [11, 62, 1, 27, 8, 5];
// let sorted = arr.sort();
// console.log(sorted);


//Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following thing in order:

//Calculate the dog age in human years using the following formula: if the dogAge <= 2 years old, humanAge = 2 \* dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge

// const ages = [12,2,5,12,8,13,9];
// const dogsage = ages.foreach(age){
//  if(age<=2){
//   let humanAge = 2*age;
//  }

// }


// //Guess the Output and Explain Why?
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let elem = arr.at(-1);
// console.log(elem);


// //Guess the Output and Explain why?
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let result = arr.slice(2, 5).splice(0, 2, 21).pop();
// console.log(result);


//// You have to create a Shopping_Cart array with following features :
//// addItem(itemName) : this function should add string itemName to cart
//// removeItem(itemName): this function should remove any item which matches itemName. Hint : search for index of itemName and then remove it
//// cartSize() : returns size of cart in terms of number of cart Items.

// const shoppingCart =[];
// const addItem = (itemName)=>{
//  return shoppingCart.push(itemName);
// }
// const removeItem = (itemName)=>{
//   let index = shoppingCart.indexOf(itemName);
//   if(index!== -1){
//   shoppingCart.splice(index, 1);
// }}
// const cartSize=()=>{
//   return shoppingCart.length;
// }
// addItem("Skert");
// addItem("Shoes");
// addItem("T-shirt");
// console.log(shoppingCart);
// removeItem("Shoes");
// console.log(shoppingCart);
// console.log(cartSize());




// //Create regex for password with the following validations.
// Length of password at least of 8 characters
// contain at least one special character
// contain at least one alphabet (a-z) character

// let form = document.querySelector('.testForm');
// let inputPassword = document.querySelector('.inputPass');
// let requiredPasswordPattern = '^(?=.*[a-z])(?=.*[$#+{}:?.,~@]).{8,}$';
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   let password = inputPassword.value;
// console.log(password);
//   let result = password.match(requiredPasswordPattern);
//   if (result) {
//     console.log('Your password validated successfully');
//   } else {
//     console.log('try again with new password');
//   }
// });

//How can we get current time in millisecond of current time?
// let mydateinSec = new Date().getTime();
// console.log(mydateinSec);


////Guess the Output and Explain Why?
// let currentDate = new Date();
// let result1 = currentDate.getDay();
// let result2 = currentDate.getDate();
// console.log(result1, result2);


// Create two variables myHobby , age . Now set their value in local storage (according to your hobby and age).

// After setting also get value from local storage and display their values in console.

// let myHobby = "Dancing";
// let age = 25;
// localStorage.setItem("myHobby",myHobby);
// localStorage.setItem("age",age);
// console.log(localStorage);

// localStorage.getItem("myHobby",myHobby);
// localStorage.getItem("age",age);
// console.log(localStorage);

