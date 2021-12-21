import {Component, Input, OnInit} from '@angular/core';
import {IStatusItem} from "../../models/status.model";

@Component({
  selector: 'app-item-status',
  templateUrl: './item-status.component.html',
  styleUrls: ['./item-status.component.css']
})
export class ItemStatusComponent implements OnInit {
  @Input() statusId: number;
  @Input() itemsStatusNames: IStatusItem[];

  statusName: string;

  constructor() { }

  ngOnInit(): void {
    const status = this.itemsStatusNames.find((item: IStatusItem) => item.id === this.statusId);
    this.statusName = status.label;
  }
}
