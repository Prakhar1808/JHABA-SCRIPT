let lunches = [];
function addLunchToEnd(array,string){
  array.push(string);
  console.log(`${string} added to the end of the lunch menu.`);
  return array;
}

function addLunchToStart(array,string){
  array.unshift(string);
  console.log(`${string} added to the start of the lunch menu.`);
  return array;
}

function removeLastLunch(array){
  if (array.length==0){
    console.log("No lunches to remove.");
  }
  else{
    let last = array.pop();
    console.log(`${last} removed from the end of the lunch menu.`);
  }
  return array;
}

function removeFirstLunch(array){
  if (array.length==0){
    console.log("No lunches to remove.");
  }
  else{
    let first = array.shift();
    console.log(`${first} removed from the start of the lunch menu.`)
  }
  return array;
}

function getRandomLunch(array){
  if (array.length==0){
    console.log("No lunches available.");}
  else{
    console.log(`Randomly selected lunch: ${array[Math.floor(Math.random()*(array.length))]}`);
  }
}

function showLunchMenu(array){
  if (array.length==0){
    console.log("The menu is empty.");}
  else{
    let lunchMenu = array.join(", ");
    console.log(`Menu items: ${lunchMenu}`);}
}
