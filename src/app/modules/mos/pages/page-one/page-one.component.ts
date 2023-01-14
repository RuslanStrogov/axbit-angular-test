import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageOneComponent implements OnInit {

  ngOnInit(): void {

    console.log('PageOneComponent init');

  }

}
