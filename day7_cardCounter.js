let count = 0;
function cardCounter(card){
  if (card>=2 && card<=6){
    count+=1;
  } 
  else if (card==10 || card=="J" || card=="Q" || card=="K" || card=="A"){
    count-=1;
  }
  let message = count > 0 ? count + " Bet": count + " Hold";
  return message;
}
