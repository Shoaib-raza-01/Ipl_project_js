function matchersWonPerTeamPerYear(matchData) {

    let wonByTeams = {};
    for(let matches of matchData){
        if(matches.winner=='Rising Pune Supergiant'){
            matches.winner = 'Rising Pune Supergiants'
        }
        if(matches.winner==""){
            continue;
        }
        if(!wonByTeams[matches.winner]){
            wonByTeams[matches.winner]={};
        }
        if(wonByTeams[matches.winner][matches.season]){
            wonByTeams[matches.winner][matches.season]+=1;
        }else{
            wonByTeams[matches.winner][matches.season]=1;
        }
    }
    return wonByTeams;
    
}
export default matchersWonPerTeamPerYear;