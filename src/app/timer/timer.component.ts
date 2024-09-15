import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent {
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  remainingTime: number = 0;
  totalDuration: number = 100;
  displayTime: string = '00:00:00';
  interval: any;
  isTimerRunning: boolean = false;
  strokeDasharray: number = 282;
  strokeDashoffset: number = 282;

  private calculateTotalSeconds(): number {
    return (this.hours * 3600) + (this.minutes * 60) + this.seconds;
  }

  startTimer() {
    if (this.interval) {
      clearInterval(this.interval);
    }

    this.totalDuration = this.calculateTotalSeconds();
    this.remainingTime = this.calculateTotalSeconds();
    this.remainingTime = this.totalDuration;

    if (this.remainingTime > 0) {
      this.isTimerRunning = true;
      this.updateProgress();

      this.interval = setInterval(() => {
        if (this.remainingTime > 0) {
          this.remainingTime--;
          this.updateDisplayTime();
          this.updateProgress();
        } else {
          this.stopTimer();
        }
      }, 1000);
    }
  }

  stopTimer() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.isTimerRunning = false;
  }

  private updateDisplayTime() {
    const hours = Math.floor(this.remainingTime / 3600);
    const minutes = Math.floor((this.remainingTime % 3600) / 60);
    const seconds = this.remainingTime % 60;

    this.displayTime = `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  private updateProgress() {
    const progress = this.remainingTime / this.totalDuration;
    this.strokeDashoffset = 282 * progress;
    this.strokeDashoffset = this.strokeDasharray * (1 - progress);
  }

  private padZero(time: number): string {
    return time < 10 ? '0' + time : time.toString();
  }
}