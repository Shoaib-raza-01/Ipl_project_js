// const csv = require("csv-parser");
// const fs = require("fs");
import csv from "csv-parser";
import fs from "fs";

//function imports from server file
import matchesPerYyear from "./server/1-matches-per-year.js";
import matchersWonPerTeamPerYear from "./server/2-matches-won-per-team-per-year.js";
import extraRunsConcededPerTeam from "./server/3-extra-run-conceded-per-team.js";
import topTenEconomicalBowlers from "./server/4-top-ten-economical-bowlers.js";
import tossWonAndMatchWon from "./server/5-toss-and-match-winner.js";
import countOfPlayerOfTheMatchPerSeason from "./server/6-player-of-the-match.js";
import strikeRateOfABatsman from "./server/7-strike-rate-of-a-batsman.js";
import playerDismissedByAnotherPlayer from "./server/8-dismissed-by-same-palyer.js";
import bestEconomyBowlerOfSuperOver from "./server/9-best-economical-super-over.js";

const matches = [];
const deliveries = [];

fs.createReadStream("./data/matches.csv")
  .pipe(csv())
  .on("data", (data) => {
    matches.push(data);
  })
  .on("end", () => {

    //question one --- matches per year
    const res = matchesPerYyear(matches);
    saveIntoJSON("./public/outputs/1-matches-per-year.json", res);


    //question two --- matches per team per year
    const ques2 = matchersWonPerTeamPerYear(matches)
    saveIntoJSON('./public/outputs/matches-per-team-per-year.json', ques2)
    

    // importing deliveries csv file 
    fs.createReadStream('./data/deliveries.csv')
    .pipe(csv())
    .on('data', (data) => {deliveries.push(data);})
    .on('end', () => {


        //question three --- extra runs conceded by each team in the year 2015
        const ques3 = extraRunsConcededPerTeam(matches, deliveries)
        // const ques3 = extraRunsConcededPerTeam(matches);
        saveIntoJSON('./public/outputs/extra-runs-conceded-by-each-team-in-2016.json',ques3)


        // question four --- top 10 economical bowler of 2015
        const ques4 = topTenEconomicalBowlers(matches, deliveries)
        saveIntoJSON('./public/outputs/top-ten-economical-bowlers-of-2015.json', ques4);


        // question seven --- strike rate of a batsman on all season
        strikeRateOfABatsman(matches, deliveries, "SE Marsh");


        // question eight --- highest number of times one player has been dismissed by another player
        playerDismissedByAnotherPlayer(deliveries);


        // question nine --- best economical bowler of super over
        const quest9 = bestEconomyBowlerOfSuperOver(deliveries);
        saveIntoJSON('./public/outputs/best-economic-bowler-superover.json', quest9);
    })


    // question five --- team which won the toss as well as the match
    const ques5 = tossWonAndMatchWon(matches);
    saveIntoJSON('./public/outputs/teams-which-won-the-toss-as-well-as-the-match.json', ques5);


    // question six --- count of player of the match peer season 
    const ques6 = countOfPlayerOfTheMatchPerSeason(matches);
    saveIntoJSON('./public/outputs/count-of-players-of-the-match-per-season.json', ques6);

  });


function saveIntoJSON(path, res) {

    let data = JSON.stringify(res, null, 4);
  fs.writeFile(path, data, (err) => {
    if (err) {
      console.log(`Error occured ${err}`);
      return;
    } else {
      console.log(`Data has been saved to ${path} location`);
    }
  });
}