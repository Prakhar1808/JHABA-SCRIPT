function confirmEnding(string,stringTarget){
  let stringTargetLength=stringTarget.length;
  if (string.slice(-stringTargetLength)==stringTarget){
    return true;}
  else{
    return false;
  }
}

console.log(confirmEnding("Bastian", "n"));
