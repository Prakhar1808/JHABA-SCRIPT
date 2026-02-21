JSON.stringify() // to turn JS object into JSON string
JSON.parse()     // to turn json string into js object
// we can also only take specific properties

const developerObj = {
  firstName: "Jessica",
  isAwesome: true,
  isMusician: true,
  country: "USA",
};

console.log(JSON.stringify(developerObj, ["firstName", "country"]));
// result: {"firstName":"Jessica","country":"USA"}


console.log(JSON.stringify(developerObj, null, 2));
/* result
{
  "firstName": "Jessica",
  "isAwesome": true,
  "isMusician": true,
  "country": "USA"
}
*/

const jsonString = '{"name":"John","age":30,"isAdmin":true}';
const userObject = JSON.parse(jsonString);
console.log(userObject);

// Result:
// { name: 'John', age: 30, isAdmin: true }
