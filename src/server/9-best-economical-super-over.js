function bestEconomyBowlerOfSuperOver(deliveries) {
  
    const bowler = {}
    for(let delivery of deliveries){
        if(delivery.is_super_over == 1){
            if(!bowler[delivery.bowler]){
                bowler[delivery.bowler] = {"run" : parseInt(delivery.total_runs), "ball" : 1};
            }else{

            bowler[delivery.bowler]["run"] += parseInt(delivery.total_runs);
            bowler[delivery.bowler]["ball"] += 1
            }
        }
    }
    // console.log(bowler);
    const economy = []
    Object.entries(bowler).forEach(([bowler, stats]) => {
        let eco = parseFloat((stats.run/(stats.ball/6)).toFixed(2))
        economy.push({'name': bowler, 'economy': eco})
    })
    return economy.sort((a, b) => {
        return a.economy-b.economy
    }).slice(0,1);
}

export default bestEconomyBowlerOfSuperOver;