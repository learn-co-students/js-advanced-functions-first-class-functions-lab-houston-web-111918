// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
    return [array[0],array[1]]
}

const returnLastTwoDrivers = function(array){
    return [array[array.length-2], array[array.length-1]]
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = function(f){
    return function(fare){
      return fare * f
    }
  }

const fareDoubler = function(f) {
    return f * 2
}

const fareTripler = function(f) {
    return f * 3
}

function fetchSpecifiedDrivers(arrayOfDrivers, callback) {
    return callback(arrayOfDrivers)
}