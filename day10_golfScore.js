const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  let string = "";
  if (strokes == 1) { string = names[0]; return string; }
  else if (strokes <= par - 2) { string = names[1]; return string; }
  else if (strokes == par - 1) { string = names[2]; return string; }
  else if (strokes == par) { string = names[3]; return string; }
  else if (strokes == par + 1) { string = names[4]; return string; }
  else if (strokes == par + 2) { string = names[5]; return string; }
  else if (strokes >= par + 3) {
    string = names[6];
    return string;
  }
}
