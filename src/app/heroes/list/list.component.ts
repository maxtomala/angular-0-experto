import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames:string[]=['Spiderna','Iroman', 'Hulk','she hulk','Thor'];
public deleteHero?:string

  removeLastHero(){
    this.deleteHero= this.heroNames.pop();


  }


}
