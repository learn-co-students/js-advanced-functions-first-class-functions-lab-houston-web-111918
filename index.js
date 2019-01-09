// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(array){
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(num){
    return function(fare){
      return fare * num
    }
  }

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(arrayOfDrivers, callback) {
    return callback(arrayOfDrivers)
}