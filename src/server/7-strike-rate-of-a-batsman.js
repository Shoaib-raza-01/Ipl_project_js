function strikeRateOfABatsman(matches, deliveries, player_name) {
    const filteredDeliveries = deliveries.filter((ele) => {
        return ele.batsman === player_name;
    })
    const strikeRateData = {}
    for(let delivery of filteredDeliveries){
        const match = matches.find((ele) => {
            return delivery.match_id === ele.id
        })
        if(!strikeRateData[match.season]){
            strikeRateData[match.season] = [parseInt(delivery.batsman_runs), 1]        
        }else{
            strikeRateData[match.season][0] += parseInt(delivery.batsman_runs);
            strikeRateData[match.season][1]++;
        }
    }
    
    // console.log(strikeRateData);
}



// function calculateStrikeRate(deliveries, player_name){
//     const filteredDeliveries = deliveries.filter((ele) => {
//         return ele.batsman === player_name;
//     })
//     let totalRuns = 0;
//     let totalBallsFace = 0;
//     for (let del of filteredDeliveries){
//         totalRuns += parseInt(del['total_runs']);
//         totalBallsFace++;
//     }
//     const sr = ((totalRuns/totalBallsFace)*100).toFixed(2);
//     // return sr;
//     // console.log(sr);  //correct

// }
export default strikeRateOfABatsman;