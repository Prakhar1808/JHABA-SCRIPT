function isLeapYear(year){
  let message=(year%4==0 && year%100!==0) || year%400==0 ? `${year} is a leap year.` : `${year} is not a leap year.`
  return message;
}

let year=2024;
let result = isLeapYear(year);
console.log(result);

year=2000;
result = isLeapYear(year);
console.log(result);

year=1900;
result = isLeapYear(year);
console.log(result);
