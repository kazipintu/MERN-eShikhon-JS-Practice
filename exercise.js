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