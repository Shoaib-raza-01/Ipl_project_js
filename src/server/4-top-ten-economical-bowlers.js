function topTenEconomicalBowlers(matchData, deliveries){
    const matchID2015 = []
    matchData.filter((matchId) => {
        return (matchId['season'] == 2015);
    }).map((ele) => {
        matchID2015.push(ele.id)
    })
    // console.log(matchID2015);
    const res = calculateEconomy(matchID2015, deliveries)
    return res;
    
}

function calculateEconomy(matchId, deliveries) {
    const filteredDeliveries = deliveries.filter((ele) => {
        return matchId.includes(ele.match_id)
    });
    const bowler = {}
    for(let delivery of filteredDeliveries){
        if(!bowler[delivery.bowler]){
            bowler[delivery.bowler] = {"run" : parseInt(delivery.total_runs), "ball" : 1};
        }
        bowler[delivery.bowler]["run"] += parseInt(delivery.total_runs);
        bowler[delivery.bowler]["ball"] += 1
    }
    // console.log(bowler);
    const economy = []
    Object.entries(bowler).forEach(([bowler, stats]) => {
        let eco = parseFloat((stats.run/(stats.ball/6)).toFixed(2))
        economy.push({'name': bowler, 'economy': eco})
    })
    return economy.sort((a, b) => {
        return a.economy-b.economy
    }).slice(0,10);
}

export default topTenEconomicalBowlers;