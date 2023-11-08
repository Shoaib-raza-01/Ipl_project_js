export default function extraRunsConcededPerTeam(matchData, deliveries){
    const matchID2015 = []
    matchData.filter((matchId) => {
        return (matchId['season'] == 2016);
    }).map((ele) => {
        matchID2015.push(ele.id)
    })
    // console.log(matchID2015);
    const res = calculateExtra(matchID2015, deliveries)
    return res;
    
}

function calculateExtra(matchIDs,deliveries) {
    const filteredDeliveries = deliveries.filter((del) => {
        return matchIDs.includes(del.match_id)
    })
    // for(let delivery of deliveries){
        
    // }
    const extraRunsConceved = {}
    filteredDeliveries.forEach(element => {
        if (extraRunsConceved[element.bowling_team]) {
            extraRunsConceved[element.bowling_team] += parseInt(element.extra_runs);
        }else{
            extraRunsConceved[element.bowling_team] = parseInt(element.extra_runs);
        }
    });
    // console.log(extraRunsConceved);
    return extraRunsConceved;
}