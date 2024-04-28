const myNumber = -9;
const posNumb = Math.abs (myNumber);
// console.log(Math.abs (myNumber));
//console.log(posNumb);

const Num1 = 5.6478;
const Num2 = 5.6784;
const OutNum1 = Math.ceil(Num1);
// console.log(OutNum1);

const OutNum2 = Math.floor(Num2);
// console.log(OutNum2);

// console.log(OutNum1, OutNum2);

const RanNum  = Math.random();
// console.log(RanNum);

const RanNum2 = Math.random() * 6;
// console.log(RanNum2);

const RanNum3 = Math.random() * 6;
const outNum3 = Math.ceil(RanNum3);
const outNum4 = Math.floor(RanNum3);
// console.log(outNum3, outNum4);

let num10 = 3;
let num12 = 5;

let xNum = num10;
num10 = num12;
num12 = xNum


// console.log(num10, num12);


 let xxNum = 12;
 let yyNum = 15;

//  console.log(xxNum, yyNum);

 let zzNum = xxNum;  //zzNum  = 12
 xxNum = yyNum;  //xxNum = 15
 yyNum = zzNum;  //yyNum = 12

//  console.log(xxNum, yyNum);

let xNum1 = 4.3562;

let yNum1 = Math.ceil(xNum1);
let zNum1 = Math.floor(xNum1)

// console.log(yNum1, zNum1);

let xNum2 = 56.8976

// console.log(Math.ceil(xNum2), Math.floor(xNum2));

let xNum3 = 521.2356;

//console.log(Math.floor(xNum3), Math.ceil(xNum3));


let aNum = 34;
let bNum = 56;

let cNum = aNum;
aNum = bNum;
bNum = cNum;

//console.log(aNum, bNum);

let dNum = 89;
let eNum = 956;

let fNum = dNum;
dNum = eNum;
eNum = fNum;

//console.log(dNum, eNum);

let gNum = 254;
let hNum = 365;

//console.log(gNum, hNum);

let iNum = gNum;
gNum = hNum;
hNum = iNum;

//console.log(gNum, hNum);

let jNum = 354;
let kNum = 567;

//console.log(jNum, kNum);

let lNum = jNum;
jNum = kNum;
kNum = lNum;

//console.log(jNum, kNum);


let mglass = 'juice';
let nglass = 'water';

//console.log(mglass, nglass);

let oglass = mglass;
mglass = nglass;
nglass = oglass;

// console.log(mglass, nglass);

let xComb = 256;
let yComb = 'Jani na';

//console.log(xComb, yComb);

let zComb = xComb;
xComb = yComb;
yComb = zComb;

//console.log(xComb, yComb);

let numX = 235;
let numY = 256;

//console.log(numX, numY);

[numX, numY] = [numY, numX]

//console.log(numX, numY);

let mNumb = 235;
let nNumb = 625;

//console.log(mNumb, nNumb);

[mNumb, nNumb] = [nNumb, mNumb];

//console.log(mNumb, nNumb);

xy = 5;
yz = 8;
zx = 10;

//console.log(xy, yz, zx);

[xy, yz, zx] = [zx, xy, yz]  //destructuring system

//console.log(xy, yz, zx);

[xy, yz, zx] = [zx, xy, 'eta ho naki']

//console.log(xy, yz, zx);



// const [firstColor, secondColor, thirdColor, fourthColor] = colors;

//console.log(firstColor);
//console.log(secondColor);
//console.log(thirdColor);
//console.log(fourthColor);


/*console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(fourthColor);
console.log(fifthColor);*/



function largestNumber(ages) {
  //console.log(ages);
  let largest = 0;
  for ( let i = 0; i < ages.length; i ++ ){
    const element = ages[i]
    //console.log(element);
    if (element > largest) {
     largest = element;
    }
  }

  return largest;
}

const ageArray1 = [12, 50, 23, 45, 87, 1, 23, 356, 45, 78, 97];
const result = largestNumber(ageArray1);
// console.log(result);



function findMyColor(color) {
  for (let i = 0; i < color.length; i ++){
    const value = color[i];
    if (value == 'green') {
      return value;
    } 
  }
  return "not available"; 
}

const mamaColor = ['red', 'green', 'blue', 'purple', 'orange', 'violet', 'indigo', 'yellow'];
const resultColor1 = findMyColor(mamaColor)
//console.log(resultColor1);


function findMyCar(car) {

  for (let i = 0; i < car.length; i ++){
    if (car[i] =='chevy'){
      return 'chevy';
    }
  }
  return 'car not found'
}


const favCars = ['toyota', 'honda', 'nissan', 'maruti', 'kia', 'hyundai'];
const carResult = findMyCar(favCars);
//console.log(carResult);

function myFavSpot(location) {
  for ( i = 0; i < location.length; i ++){
    if (location[i] == 'london') {
      return 'london';
    }
  }
  return "location not found";
}


const myFavSpots= ['digha', 'sundarbans', 'gangtok', 'darjeeling', 'mirik', 'kashmir', 'sandakfu' ]; 
const resultMyFavSpot = myFavSpot (myFavSpots);
//console.log(resultMyFavSpot);



function myFavSinger(singer) {
  for (let i = 0; i < singer.length; i++) {
    if (singer[i] == 'rafi') {
      return 'rafi';
    }
    
  }

  return "others";
}


const singers = ['rafi', 'kishore', 'lata', 'mukesh', 'arijit', 'shreya'];
const resultMyFavSinger = myFavSinger (singers);
//console.log(resultMyFavSinger);


function myFavFruit(fruit) {
  for (let i = 0; i < fruit.length; i++) {
    const element = fruit[i];
    if (fruit[i] == 'peach') {
      return element;
    }  
  }
  return "other";
}

const fruits = ['mango', 'orange', 'apple', 'watemelon', 'pineaple'];
const resultMyFavFruit = myFavFruit (fruits);
//console.log(resultMyFavFruit);


function myFavFlower(flower) {
  for (let i = 0; i < flower.length; i++) {
    const element = flower[i];
    if (flower[i] == 'sapla') {
      return 'spla';
    }
  }
  return "not available";
}

const flowers = ['lotus','rose', 'tube rose', 'jasmine', 'bella', 'joba'];
const resultMyFavFlower = myFavFlower(flowers);
console.log(resultMyFavFlower);



/*There is an array of object, use Function 
to check if there is a red color product in the object, 
then return and show by console.log, else show
there is no product in it.*/

// var productArray = [ 
//   {mobile:'samsung', color:'green', size: '720p'},
//   {mobile:'iphone', color:'blue', size: '350p'},
//   {mobile:'redmi', color:'white', size: '540p'},
//   {mobile:'nokia', color:'red', size: '1080p'},
//   {mobile:'huawei', color:'black', size: '720p'}
// ];

// function nameRedMobile(products) {
  
//   var empty = [];
//   for (const productArray of products) {
//     if (productArray.color == 'red'){
//         empty.push (product);
//     }  
//   }
//   return empty;
// }

// const redPhone  = nameRedMobile(productArray);
// console.log(redPhone);


