import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alert',
  templateUrl: 'alert.component.html',
  styleUrls: ['alert.component.scss'],
})
export class AlertComponent {
  constructor(public route: ActivatedRoute) {}
}
