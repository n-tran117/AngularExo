import { Component } from '@angular/core';
import { Subscription, map, share, timer } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent {
    date: Date = new Date();

    constructor() { }

    time = new Date();
    rxTime = new Date();
    intervalId: any;
    subscription: Subscription;

    ngOnInit() {
        // Using Basic Interval
        this.intervalId = setInterval(() => {
            this.time = new Date();
        }, 1000);

        // Using RxJS Timer
        this.subscription = timer(0, 1000)
            .pipe(
                map(() => new Date()),
                share()
            )
            .subscribe((time) => {
                this.rxTime = time;
            });
    }
}
