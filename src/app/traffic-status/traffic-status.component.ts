import { Component, DestroyRef, OnDestroy, OnInit } from '@angular/core';

enum ServerStatus {
  ONLINE = 'online',
  OFFLINE = 'offline',
  UNKNOWN = 'unknown',
}

@Component({
  selector: 'app-traffic-status',
  standalone: true,
  imports: [],
  templateUrl: './traffic-status.component.html',
  styleUrl: './traffic-status.component.css',
})
export class TrafficStatusComponent implements OnInit {
  currentStatus:
    | ServerStatus.ONLINE
    | ServerStatus.OFFLINE
    | ServerStatus.UNKNOWN = ServerStatus.ONLINE;

  constructor(private destroyRef: DestroyRef) {}

  ngOnInit() {
    const interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus = ServerStatus.ONLINE;
      } else if (rnd < 0.9) {
        this.currentStatus = ServerStatus.OFFLINE;
      } else {
        this.currentStatus = ServerStatus.UNKNOWN;
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }
}
