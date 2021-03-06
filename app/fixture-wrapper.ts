import {Fixture} from './fixture';
export class FixtureWrapper {

  constructor(public _links:Object,
              public count:number,
              public fixtures:Fixture[]) {
  }
}

class FixtureResult {

  constructor(public goalsHomeTeam?:number,
              public goalsAwayTeam?:number) {

  }
}

// "_links": {
//   "self": {
//     "href": "http://api.football-data.org/v1/fixtures/149875"
//   },
//   "soccerseason": {
//     "href": "http://api.football-data.org/v1/soccerseasons/424"
//   },
//   "homeTeam": {
//     "href": "http://api.football-data.org/v1/teams/792"
//   },
//   "awayTeam": {
//     "href": "http://api.football-data.org/v1/teams/805"
//   }
// },
// "date": "2016-06-22T19:00:00Z",
// "status": "TIMED",
// "matchday": 3,
// "homeTeamName": "Sweden",
// "awayTeamName": "Belgium",
// "result": {
//   "goalsHomeTeam": null,
//   "goalsAwayTeam": null
// }