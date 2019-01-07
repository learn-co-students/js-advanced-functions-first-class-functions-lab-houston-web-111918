const returnFirstTwoDrivers = function(array) {
    return [array[0], array[1]];
  };

const returnLastTwoDrivers = function(array) {
  return array.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(mult) {
  return function(num) {
    return mult * num;
  };
};

const fareDoubler = function(num) {
  return num * 2;
};

const fareTripler = function(num) {
  return num * 3;
};

const fetchSpecifiedDrivers = function(drivers, f) {
  return f(drivers);
};
