// function declaration
// 1. Function Creation, 2. Function starting, 3. call, 4. Function Return (call)

function startFan() {
//   console.log('function is running');
}

startFan()

function takeShower(people){
//   console.log('Now in shower', people);
}
takeShower('Shorif bhai')

function name(params) {
//   console.log(params, 'parameters');
}
name('number')

function startTheFan(){ //function starting (parameter, lika a variable)
  //console.log('Fan is started'); //rerturning
}
startTheFan()  //calling (input)

function takeShower(people){
  //console.log(people, 'now in shower');
}
takeShower('Ali Bhaiya')

function takeShower(people){
  //console.log(people);
}
takeShower('Ali Bhaiya')

function takeShower(people, group){
  //console.log();
}
takeShower(101, 'who')

function addTwoNumbers(num1, num2){
  const total = num1 + num2;
  //console.log(total);
}
addTwoNumbers(5, 10)
addTwoNumbers(15, 10)

function addTwoNumbers(num1, num2){
  const total = num1 + num2;
  // console.log(total);
  return total;
}

const dadi = addTwoNumbers(12, 15);
// console.log(dadi);

function addTwoNumbers(num1, num2){
  const total = num1 + num2;
  // console.log(total);
  return total;
 
}

const dadi = addTwoNumbers(12, 15);
// console.log(dadi);
const baba = addTwoNumbers(18, 20);
//console.log(baba);


function blenderJuicer(l1, p1, s1, w1){
  juice = l1 + p1 + s1 + w1;
  return juice;
}

const kabab = 'beefpaste'
const filler = 'besan'
const customer = blenderJuicer('lemon', 'pineapple', 'salt', 'water');
// console.log(customer);
const maa = blenderJuicer('onion', 'ginger', 'garlic', 'salt');
// console.log(maa + kabab + filler);

// object declaration

const student = { class:10, section:'D', roll:53, mathMarks:48, fitBody: false, behaveGood:'true', phone:undefined}

const laptop = {brand:'framework', nanoCircuit: undefined, color: 'aluminium', price: 1200, availableIndia: undefined}

// array in third bracket [], object always in second/curly bracket {}

// console.log(student);
// console.log(laptop);

// objects always in pairs with {property -> value} combination or
// objects always in pairs with {key -> value} combination
// this is called key->value pair

const laptop = {brand:'framework', nanoCircuit: undefined, body: 'aluminium', color: 'silver', price: 1200, availableIndia: undefined}

// console.log(laptop.color);
//console.log(laptop);
laptop.price = 900;
//console.log(laptop);

// object data_type is "non=-primitive" data type
laptop.price = '$900';
//console.log(laptop);
laptop['price'] = '$600'
//console.log(laptop);
const priceKey = 'price'
laptop[priceKey] = '$1000'
//console.log(laptop);

const student = { class:10, section:'D', roll:53, mathMarks:48, fitBody: false, behaveGood:'true', address:undefined}

const newObjectPhone = 'phone'
// student.phone = 987654321
student['phone'] = 987654321
//console.log(student);
delete student.behaveGood;
//console.log(student);