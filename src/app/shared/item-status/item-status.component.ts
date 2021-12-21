import {Component, Input, OnInit} from '@angular/core';
import {IStatusItem} from "../../models/status.model";
import {Observable} from "rxjs";
import { statusStateItemsSelector} from "../../store/status.selectors";
import {listStateItemsSelector} from "../../store/list.selectors";
import { IListItem} from "../../models/list.model";
import { Store, select } from "@ngrx/store";
@Component({
  selector: 'app-item-status',
  templateUrl: './item-status.component.html',
  styleUrls: ['./item-status.component.css']
})
export class ItemStatusComponent implements OnInit {

  statusItems$: Observable<IStatusItem[]> = this.store$.pipe(
    select(statusStateItemsSelector)
  );

  listItems$: Observable<IListItem[]> = this.store$.pipe(
    select(listStateItemsSelector)
  );


  @Input() itemId: number;
  @Input() itemsStatusNames: IStatusItem[];

  statusName: string;

  constructor(private store$: Store) {}
  ngOnInit() {}

  getStatusName(statusId: number, statuses: IStatusItem[]) {
    const status = statuses.find((item: IStatusItem) => item.id === statusId);
    console.log(status.label);
    return status.label;
  }

}
