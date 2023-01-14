import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-mos',
  templateUrl: './nav-mos.component.html',
  styleUrls: ['./nav-mos.component.scss']
})
export class NavMosComponent {

  public pages: string[] = [
    'one',
    'two'
  ];

}
