import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TheaterService } from '../../services/theater.service';
import { Theater } from '../../models/theater';
import { BehaviorSubject, Observable, scan, switchMap } from 'rxjs';

@Component({
  selector: 'app-list-theater',
  templateUrl: './list-theater.component.html',
  styleUrls: ['./list-theater.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListTheaterComponent implements OnInit {

  @Input('limit') limit: number = 10;

  // public theaters: Theater[] = [];
  public theaters$: Observable<Theater[]> | undefined;

  page: number = 0;
  public pageSubject$: BehaviorSubject<number> = new BehaviorSubject(this.page);

  constructor(
    private theaterService: TheaterService,
  ) {}

  ngOnInit(): void {

    console.log('ListTheaterComponent init');

    // this.theaterService.getTheater()
    // .subscribe((theaters: Theater[]) => {
    //   console.log('ListTheaterComponent getTheater', theaters);
    // });

    // this.theaterService.getTheaterRows()
    // .subscribe((theaters: Theater[]) => {
    //   console.log('ListTheaterComponent getTheaterRows', theaters);
    //   this.theaters = theaters;
    // });

    this.loadContent();

  }

  loadContent() {

    this.theaters$ = this.pageSubject$.pipe(
      switchMap((page: number) => {
        return this.theaterService.getTheaterRows(this.limit, page * this.limit);
      }),
      scan((allItems: Theater[], pageItems: Theater[]) => {
        // if(!pageItems.length || this.limit < pageItems.length) {
        //   this.canLoadMore = false;
        // }
        return [...allItems, ...pageItems];
      }),
      // finalize(() => {
      // })
    );

  }

}
