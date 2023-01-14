import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MovieTheaterService } from '../../services/movie-theater.service';
import { MovieTheater } from '../../models/movie-theater';
import { BehaviorSubject, combineLatest, finalize, interval, map, mergeMap, Observable, of, scan, Subject, Subscription, switchMap, take, takeUntil, tap, timer } from 'rxjs';

@Component({
  selector: 'app-list-movie-theater',
  templateUrl: './list-movie-theater.component.html',
  styleUrls: ['./list-movie-theater.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListMovieTheaterComponent implements OnInit, OnDestroy {

  @Input('limit') limit: number = 10;
  @Input('loadInterval') loadInterval: boolean = false;

  page: number = 0;
  public canLoadMore: boolean = true;

  public movieTheaters$: Observable<MovieTheater[]> | undefined;

  private intervalSubject$: Subscription = new Subscription;
  public pageSubject$: BehaviorSubject<number> = new BehaviorSubject(this.page);

  constructor(
    private movieTheaterService: MovieTheaterService,
  ) {}

  ngOnInit(): void {
    this.loadContent();
  }

  ngOnDestroy() {
    this.intervalSubject$.unsubscribe();
    this.pageSubject$.unsubscribe();
  }

  loadContent() {

    this.movieTheaters$ = this.pageSubject$.pipe(
      switchMap((page: number) => {
        return this.movieTheaterService.getMovieTheaterRows(this.limit, page * this.limit);
      }),
      scan((allItems: MovieTheater[], pageItems: MovieTheater[]) => {
        if(!pageItems.length || this.limit < pageItems.length) {
          this.canLoadMore = false;
        }
        return [...allItems, ...pageItems];
      }),
      finalize(() => {

      })
    );

  }

  chunkLoad() {
    this.intervalSubject$ = interval(2000)
      .subscribe(() => {
        if(!this.canLoadMore) {
          this.intervalSubject$.unsubscribe();
        }
        this.loadMore()
      });
  }

  loadMore() {
    this.page++;
    this.pageSubject$.next(this.page);
  }

  refresh() {
    this.canLoadMore = true;
    this.page = 0;
    this.pageSubject$ = new BehaviorSubject(0);
    this.loadContent();
  }

}

