import { Component,  } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
<h3> Counter:{{ counter   }}</h3>

<p> bienvenido</p>
<p>{{ title }}</p>
<button (click)="increaseBy(1) " class="mx-2">+1</button>
<button (click)="increaseBy(-1) "class="mx-2">-1</button>
<button (click)="resetCounter()" class="mx-2">reset</button>

  `
})

export class  CounterComponent   {
constructor(){

}

public title = 'mi primera app de angular';
public counter: number = 10;

increaseBy(value: number): void {
  this.counter += value;
}

resetCounter(): void {
  this.counter = 10;
}

}
