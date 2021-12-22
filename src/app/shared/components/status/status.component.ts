import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import {statusStateItemByIdSelector} from 'src/app/store/status.selectors';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  @Input() statusId: number;

  statusItem$: Observable<string>;

  constructor(private store$: Store) { }

  ngOnInit(): void {
    this.statusItem$ = this.store$.pipe(
      select(statusStateItemByIdSelector, this.statusId)
    );
  }

}
