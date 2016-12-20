import { Component } from '@angular/core';

@Component({
  selector :'lap-count',
  templateUrl:'app/views/lap.html'
})
export class lapComponent{
  lap:number=0;
  constructor(){
    this.lap=0;
    setInterval(() => this.lapCount(), 2000);

}

  lapCount():void{
      this.lap=this.lap+1;
      this.lap=this.lap % 50;
  }
lapReset():void{
    this.lap=0;
}
}
