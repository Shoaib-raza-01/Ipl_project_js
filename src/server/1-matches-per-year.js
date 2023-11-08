function matchesPerYyear(matchData) {
    let result = {};
    for(let match of matchData){
        if(result[match.season]){
            result[match.season]+=1
        }
        else{
            result[match.season] = 1
        }
    }
    return result
    // console.log(result);
}

export default matchesPerYyear;