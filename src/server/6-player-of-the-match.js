function countOfPlayerOfTheMatchPerSeason(matches) {
  const countOfPlayers = {};
  for (let match of matches) {
    if (!countOfPlayers[match.season]) {
      countOfPlayers[match.season] = {};
    }
    if (!countOfPlayers[match.season][match.player_of_match]) {
      countOfPlayers[match.season][match.player_of_match] = 1;
    } else {
      countOfPlayers[match.season][match.player_of_match]++;
    }
  }
  //   console.log(countOfPlayers);
  const count = {};

  for (let year in countOfPlayers) {
    const yearData = countOfPlayers[year];
    const max = Math.max(...Object.values(yearData));
    const playerName = Object.keys(yearData).find(
      (player) => yearData[player] === max
    );
    count[year] = { Name: playerName, count: max };
  }
  //   console.log(count);
  return count;
}

export default countOfPlayerOfTheMatchPerSeason;
