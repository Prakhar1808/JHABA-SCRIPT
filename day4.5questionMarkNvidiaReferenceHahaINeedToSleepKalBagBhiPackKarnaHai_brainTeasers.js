// brain-teasers (maybe)
//#1
let vehicle = "car";

switch (vehicle) {
  case "bike":
    console.log("Bikes are two-wheelers.");
    break;
  case "car":
    console.log("Some cars are 4x4.");
  case "truck":
    console.log("Trucks can carry heavy loads.");
    break;
  default:
    console.log("Unknown vehicle.");
}

/* Output:
Some cars are 4x4.
Trucks can carry heavy loads. */

//#2
const a = 2;
if (1 == "1") {
  let b = 3;
  console.log(a + b);
}
console.log(b);

/* Output:
 5, and then an error is raised. */

