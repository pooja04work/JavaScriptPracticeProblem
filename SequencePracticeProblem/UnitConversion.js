console.log("a. conver inch to ft: ");
let inch = 24;
let ft = inch/12;
console.log(inch + " is = " + ft + " ft");

console.log("b. Rectangular Plot: ");
let METER_TO_FEET_VALUE = 3.28;
let lengthInMeter = 60 / METER_TO_FEET_VALUE;
let breadthInMeter = 40 / METER_TO_FEET_VALUE;
let areaInMeters = lengthInMeter * breadthInMeter;
console.log("60 feet x 40 feet = " + areaInMeters + " meters"); 

console.log("c. Area of 25 such plots: ");
let areaOf25Plots = 25 * areaInMeters;
console.log("Area of 25 plots(60 feet x 40 feet) = " + areaOf25Plots);

