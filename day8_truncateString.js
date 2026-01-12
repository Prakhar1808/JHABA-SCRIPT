function truncateString(string,number){
  if(string.length>number){
    string = string.slice(0,number) + "...";
    return string;
  }
  else{
    return string;
  }
}
