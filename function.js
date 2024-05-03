// function declaration
// 1. Function Creation, 2. Function starting, 3. call, 4. Function Return (call)

function startFan() {
console.log('function is running');
}

startFan()

function takeShower(people){
console.log('Now in shower', people);
}
takeShower('Shorif bhai')

function name(params) {
console.log(params, 'parameters');
}
name('number')

function startTheFan(){ //function starting (parameter, lika a variable)
console.log('Fan is started'); //rerturning
}
startTheFan()  //calling (input)

function takeShower(people){
console.log(people, 'now in shower');
}
takeShower('Ali Bhaiya')

function takeShower(people){
console.log(people);
}
takeShower('Ali Bhaiya')

function takeShower(people, group){
console.log();
}
takeShower(101, 'who')

function addTwoNumbers(num1, num2){
  const total = num1 + num2;
  console.log(total);
}
addTwoNumbers(5, 10)
addTwoNumbers(15, 10)

function addTwoNumbers(num1, num2){
  const total = num1 + num2;
  console.log(total);
  return total;
}

const dadi2 = addTwoNumbers(12, 15);
console.log(dadi2);

function addTwoNumbers(num1, num2){
  const total = num1 + num2;
  console.log(total);
  return total;
 
}

const dadi1 = addTwoNumbers(12, 15);
console.log(dadi1);
const baba1 = addTwoNumbers(18, 20);
console.log(baba1);


function blenderJuicer(l1, p1, s1, w1){
  juice = l1 + p1 + s1 + w1;
  return juice;
}

const kabab = 'beefpaste'
const filler = 'besan'
const customer = blenderJuicer('lemon', 'pineapple', 'salt', 'water');
console.log(customer);
const maa1 = blenderJuicer('onion', 'ginger', 'garlic', 'salt');
console.log(maa1 + kabab + filler);

// object declaration

const student2 = { class:10, section:'D', roll:53, mathMarks:48, fitBody: false, behaveGood:'true', phone:undefined}

const laptop2 = {brand:'framework', nanoCircuit: undefined, color: 'aluminium', price: 1200, availableIndia: undefined}

// array in third bracket [], object always in second/curly bracket {}

// console.log(student);
// console.log(laptop);

// objects always in pairs with {property -> value} combination or
// objects always in pairs with {key -> value} combination
// this is called key->value pair

const laptop = {brand:'framework', nanoCircuit: undefined, body: 'aluminium', color: 'silver', price: 1200, availableIndia: undefined}

console.log(laptop.color);
console.log(laptop);
laptop.price = 900;
console.log(laptop);

//object data_type is "non=-primitive" data type

laptop.price = '$900';
console.log(laptop);
laptop['price'] = '$600'
console.log(laptop);
const priceKey = 'price'
laptop[priceKey] = '$1000'
console.log(laptop);

const student = { class:10, section:'D', roll:53, mathMarks:48, fitBody: false, behaveGood:'true', address:undefined}

const newObjectPhone = 'phone'
student.phone = 987654321
student['phone'] = 987654321
console.log(student);
delete student.behaveGood;
console.log(student);

function whetherEvenOrOdd(numb) {
  if (numb == 0) {
    return "Not a natural number";
  }
  else {
    if (numb != 0 && numb % 2 == 0){
      return "Even number"
    };
    return "Odd number"
  }
}

const mama = whetherEvenOrOdd(-325)
console.log(mama);

const result = whetherEvenOrOdd(5624)
console.log(result);

const maa = whetherEvenOrOdd(15264)
console.log(maa);

const baba = whetherEvenOrOdd(15635)
console.log(baba);

const vai = whetherEvenOrOdd(0)
console.log(vai);

const apu = whetherEvenOrOdd(-35)
console.log(vai);

function isLeapYear(year){
  if((year > 0 && year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0) ){
    return "Leap Year"
  }
  return "Not a Leap Year"
}

const time = isLeapYear (1300);
console.log(time);

const asif = isLeapYear(1500);
console.log(asif);

factorial

//3! = 3 * 2 * 1
//4!= 4 * 3 * 2 * 1
//5! = 5 * 4 * 3 * 2 * 1

let factorial = 1;
for(let i = 1; i <= 7; i ++ ){
  factorial = factorial * i;
}
console.log(factorial);

function calculateFactorial(number){
  let factorial = 1;
  for(let i = 1; i <= number; i++){
    factorial = factorial * i;  
  }
  return factorial
}

const alo = calculateFactorial(7);
//console.log(alo);

function determineFactorial(number) {
  let factorial = 1;
  let i = 1;
  while (i <= number) {
    factorial = factorial * i;
    i ++;
  }
  return factorial
}

const chand = determineFactorial(8);
console.log(chand);

function inchesToFeet(inches){
  const feet = inches/12;
  return feet
}

const result10 = inchesToFeet(2345);
console.log(result10.toFixed(2));

const maa2 = inchesToFeet(1402);
console.log(maa2.toFixed(3));

const baba2 = inchesToFeet(1305);
console.log(baba2.toFixed(2));

const vai2 = inchesToFeet(5201);
console.log(parseFloat(vai2));

const apu2 = inchesToFeet(76054);
console.log(parseInt(apu2));


