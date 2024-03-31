// number type variable
var number = 786;
// console.log(number)

number = 555;
// console.log(number)

// string type variable
var address1 = 'baruipur'
var address2 = "kolkata"
// console.log(address1)
// console.log(address2)
var number = 786;

// Boolean type variable
var todaySunny = true;
// in JavaScript we write variables in camel case

// undefined type variable
var money = undefined;

// numm type variable
var peopler = null;

var eggPrice = 7;
var onionPrice = 23;

var total = eggPrice + onionPrice
// console.log(total)

// + = - / * these are called operators

var eggPrice = 7;
var onionPrice = 23;

var total = eggPrice * onionPrice
// console.log(total)

var year = 2023;
year = year + 1;
// console.log(year)

var year = "x";
year = year + 1;
// console.log(year)

var bananaPrice = 10;
bananaPrice = bananaPrice + 1;
// console.log(bananaPrice)
bananaPrice = bananaPrice + 1;
bananaPrice += 12
bananaPrice++
bananaPrice += 11
bananaPrice++
bananaPrice--
// console.log(bananaPrice)

var PIE = (22 / 7);
// console.log(PIE)

var shoeBata = 99.99; // float number
var shirtSolly = 300; // integer number

var total1 = shoeBata + shirtSolly
// console.log(total1)

// now, we want to convert the decimal into integer
var convertInteger = parseInt(shoeBata);
// console.log(convertInteger)
// console.log(parseInt(shoeBata))

var shoeBat = 99.99; // float number
var shirtSoll = "300";
var total2 = shirtSoll + shoeBat
// console.log(total2)

var color = '150';
var water = 20;
var convertColor = parseInt(color);
// var total3 = color + water;
var total3 = water + convertColor;
// console.log(total3)
// console.log(total3)
// var convertColor = parseInt(color);

var fruit1 = '130';
var fruit2 = 20;
// var fruits = fruit2 + fruit1;
// console.log((parseInt(fruit1)) + fruit2)
// console.log(parseFloat(fruit2))

var pant = 130.03;
var belt = 170.06666667;

// mathroundedBelt = Math.round(belt);
// console.log(mathroundedBelt)
// console.log(pant + Math.round(belt))

// var floatBelt = parseFloat(belt + toFixed(2));
// console.log(floatBelt)

var first = 0.6;
var second = 0.3;

var result = first + second;
// console.log(result.toFixed(3)) //after using toFixed() it is converted to a string
// console.log(parseInt(result.toFixed(3))) // there will be nothing after 0
// console.log(parseFloat(result.toFixed(3))) //the string will be converted to number again.
// console.log(parseFloat(result.toFixed(3))) 

// function
// array
// const : variables, value/data of which may never change
const address = 'kolkata';
const student = ['one', 'two', 'three', 'four', 99, true, null, 'five', 'six', 'seven'];
// console.log(student)
// console.log(student.length)
// console.log(student.indexOf(99))
// console.log(student.indexOf(true))
// console.log(student.indexOf('five'))
// console.log(student[4])
// console.log(student[7])
// console.log(student[5])
// console.log(student[6])
// console.log(student[100])

student.push('master', 52, null)
// console.log(student)
// console.log(student.length)
// console.log(student.indexOf('master'))
// console.log(student[10])
// console.log(student)
// console.log(student.length)4
// student[12] = 'amr'
// console.log(student)
// console.log(student[12])
// console.log(student)
student.push('nasir', 'imran')
// console.log(student)
student.pop()
student.pop()
student.pop()
student.pop()
student.pop()
student.pop()
student.pop()
// student.pop()
// student.pop()
// student.pop()
// student.pop()
// student.pop()
// student.pop()
// student.pop()
// student.pop()
// console.log(student)
// after popping all data, the array becomes empty

// student.unshift('nasir', 'basheer')
// console.log(student)
student.unshift('basheer', 'nasir')
// console.log(student)
student.shift()
// console.log(student)

// console.log(5 >6);
// console.log(5 <6);
// console.log(5 == 6);
// console.log(5 != 6);
// console.log(5 >= 6);
// console.log(5 <= 6);

// const iPhone = 1000;
// const fund = 999;

// if (fund > iPhone){
//   console.log('You can purchase');
// }
// else{
//   console.log('Lack of fund');
// };

// if (fund > iPhone == true){
//   console.log('You can purchase');
// }
// else{
//   console.log('Lack of fund');
// };

// const iPhone = 1000;
// const fund = 1999;

// if (fund > iPhone == true){
//   console.log('You can purchase');
// }
// else{
//   console.log('Lack of fund');
// };

const jobHolder = true;
const savedMoney = 5000000;
const ownHomeKolkata = false;
const homeDistrict = false;

if (jobHolder == true && savedMoney >= 400000 || ownHomeKolkata == true && homeDistrict == true) {
  console.log("Marriage is allowed");
}
else {
  console.log("Proposal is rejected");
}


