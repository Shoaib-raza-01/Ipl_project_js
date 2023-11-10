function playerDismissedByAnotherPlayer(deliveries) {
  const playerDismissalCount = {};

  for (let delivery of deliveries) {
    // if(!playerDismissalCount[delivery.bowler] && delivery.player_dismissed != ""){
    //     playerDismissalCount[delivery.bowler][delivery.player_dismissed] = 1
    // }
    if (delivery.player_dismissed != "") {
      if (!playerDismissalCount[delivery.bowler]) {
        playerDismissalCount[delivery.bowler] = {};
        playerDismissalCount[delivery.bowler][delivery.player_dismissed] = 1;
      } else {
        if(playerDismissalCount[delivery.bowler][delivery.player_dismissed]){
        playerDismissalCount[delivery.bowler][delivery.player_dismissed] += 1;
      }else{
        playerDismissalCount[delivery.bowler][delivery.player_dismissed] = 1
      }
    }
  }
}
  // console.log(playerDismissalCount);

  const count = {};

  for (let bowler in playerDismissalCount) {
    const bowlerData = playerDismissalCount[bowler];
    const max = Math.max(...Object.values(bowlerData));
    const playerName = Object.keys(bowlerData).find(
      (player) => bowlerData[player] === max
    );
    count[bowler] = { Name: playerName, count: max };
  }
    // console.log(count);
  return count;
}



export default playerDismissedByAnotherPlayer;
