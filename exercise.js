const arbit = ['one', 'two', 'three', 'four', 99, true, null, 'five', 'six', 'seven', 100, 'ten'];
console.log(arbit.indexOf('rabbit'));

function myTourDistance(kilos) {
  let coverDistance = [];
  for (let i = 0; i < kilos.length; i++) {
    const element = kilos[i];
    if (coverDistance.indexOf(element) == -1) {
      coverDistance.push(element);
    }
  }
  return coverDistance;
}

const tourDistances = [23, 45, 67, -90, 56, 74, 3, 21, 36, -90, 67, 56];
myTourDistance(tourDistances);
console.log(myTourDistance(tourDistances));


function findDuplicateSports(sport) {
  let uniqueSports = [];
  for (let i = 0; i < sport.length; i++) {
    const element = sport[i];
    if (uniqueSports.indexOf(element) == -1) {
      uniqueSports.push(element);
    }
  }
  return uniqueSports;
}

const nameSports = ['football', 'cricket', 'volleyball', 'soccer', 'tennis', 'football', 'cricket', 'badminton', 'swimming', 'soccer'];
findDuplicateSports(nameSports);
console.log(findDuplicateSports(nameSports));


function findManyItem(items) {
  let newItem = [];
  for (const item of items) {
    if (newItem.indexOf(item) == -1) {
      newItem.push(item);
    }
  }
  return newItem
}

const manyItems = [45, null, 'germany', 'london', undefined, 'apple', 'germany', 'gazzah', 'philistine', 'london', null, 45, undefined, 'apple'];

findManyItem(manyItems)
console.log(findManyItem(manyItems));


for (let i = 1; i <= 50; i++) {
  //console.log(i);
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('Three & Five');
  }
  else if (i % 3 == 0) {
    console.log('Three');
  }
  else if (i % 5 == 0) {
    console.log('Five');
  }
  else if (i % 3 == 0 && i % 5 == 0) {
    console.log('Three & Five');
  }
  else {
    console.log(i);
  }
}

/*const allPhones = [
  { model: 'samsung', camera: '12mp', color: 'blue', price: 400 },
  { model: 'oppo', camera: '8mp', color: 'white', price: 300 },
  { model: 'redmi', camera: '24mp', color: 'red', price: 250 },
  { model: 'lg', camera: '24mp', color: 'black', price: 200 },
  { model: 'asus', camera: '12mp', color: 'blue', price: 200 },
];


function findCheapestPhones(phones){
  const cheapest = [];
  for (const phone of phones) {
    if (phone.price < phones.price){
        cheapest.push(phone.price);
    }
  }
  return cheapest;

}

const findCheapestPhoneResult = findCheapestPhones(allPhones);
console.log(findCheapestPhoneResult);*/


function findCheapestPhones(phones) {
  if (phones.length === 0) {
    return []; // return an empty array if there are no phones
  }

  let cheapestPrice = phones[0].price; // Assume the first phone's price is the cheapest
  const cheapestPhones = [phones[0]]; // Start with the first phone in the cheapestPhones array

  for (let i = 1; i < phones.length; i++) {
    const currentPrice = phones[i].price;

    // If we find a phone with a cheaper price, update the cheapest price and reset the array
    if (currentPrice < cheapestPrice) {
      cheapestPrice = currentPrice;
      cheapestPhones.length = 0; // Reset the array
      cheapestPhones.push(phones[i]); // Add the current phone
    }
    // If the current phone has the same price as the cheapest, add it to the array
    else if (currentPrice === cheapestPrice) {
      cheapestPhones.push(phones[i]);
    }
  }

  return cheapestPhones;
}














// https://github.com/aliwebdev1/Event