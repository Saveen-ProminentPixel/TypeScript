import { match } from "assert";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();



// const dateOfFirstMatch = reader.data[0][0];

// console.log(reader.data[0]);

// console.log(reader.data);

// const homeWin = 'H';
// const awayWin = 'A';
// const draw = 'D';



// const printMatchResult = (): MatchResult => {
//     if(match[5] === 'H'){
//         return MatchResult.HomeWin
//     }

//     return MatchResult.AwayWin;
// }

let manUnitedWins = 0;

for(let match of matchReader.matches){
    if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin){
        manUnitedWins++;
    } else if(match[2] === 'Man United' && match[5] === MatchResult.AwayWin){
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games`);

