import { Component } from '@angular/core';

@Component({
  selector:'race-count',
  templateUrl:'/app/views/race.html'
})
export class raceComponent{

 race:number;
  constructor(){

    this.race=this.racein;
  }


}
