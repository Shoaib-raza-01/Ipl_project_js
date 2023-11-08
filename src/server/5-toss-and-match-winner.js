function tossWonAndMatchWon(matches) {
  const wonTossAndMatch = {};
  for (let entry of matches) {
    if (!wonTossAndMatch[entry.season]) {
      wonTossAndMatch[entry.season] = {};
    }
    if (entry.toss_winner == entry.winner) {
      if (wonTossAndMatch[entry.season][entry.winner]) {
        wonTossAndMatch[entry.season][entry.winner] += 1;
      }else {
      wonTossAndMatch[entry.season][entry.winner] = 1;
    }
    } 
  }
//   console.log(wonTossAndMatch);
return wonTossAndMatch;
}

export default tossWonAndMatchWon;
