import { Component, signal } from '@angular/core';
import { Person } from './person';


@Component({
  selector: 'my-app',
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  public counter: number = 0;
  protected itamar: Person =
    new Person('Itamar',
      'Lachman',
      'itamar.lachman.amal@gmail.com',
      '1234',
      54);
  protected readonly title =
    signal(`hello ${this.itamar}`);

  public updateTitle(): void {
    this.title.set(`hello ${this.itamar}`);
  }

  public reset(): void {
    this.counter = 0;
  }

  public increment(): void {
    this.counter++;
  }

  public decrement(): void {
    this.counter--;
  }
}
