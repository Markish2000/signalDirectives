// Angular
import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css'],
})
export class CounterPageComponent {
  public counter = signal(0);
  public squareCounter = computed(() => this.counter() * this.counter());

  public increaseBy(value: number): void {
    this.counter.update((current) => current + value);
  }
}
