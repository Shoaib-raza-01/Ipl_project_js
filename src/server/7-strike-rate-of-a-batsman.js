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
    const res = calculateStrikeRate(strikeRateData);
    return res;

}



function calculateStrikeRate(rawData){
    // const sr = ((totalRuns/totalBallsFace)*100).toFixed(2);
    // return sr;
    // console.log(sr);  //correct
    const strikeRate = {}
    Object.entries(rawData).forEach((rate) => {
        let totalRuns = rate[1][0];
        let ballsFaced = rate[1][1];
        let sr = (totalRuns / ballsFaced * 100).toFixed(2);
        // console.log(`Season: ${rate[0]} Strike Rate: ${sr}`);
        // strikeRate[`${rate[0]}`] = sr;
        strikeRate[`${rate[0]}`] = sr;
    });
    // console.log(strikeRate);
    return strikeRate;
}
export default strikeRateOfABatsman;