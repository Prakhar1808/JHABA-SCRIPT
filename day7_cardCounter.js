let count = 0;
function cardCounter(card){
  if (card>=2 && card<=6){
    count+=1;
  } 
  else if (card==10 || card=="J" || card=="Q" || card=="K" || card=="A"){
    count-=1;
  }
  let message = "";
  if(count>0){
    message=count+" "+"Bet";
  }
  else{
    message=count+" "+"Hold";
  }
  return message;
}
