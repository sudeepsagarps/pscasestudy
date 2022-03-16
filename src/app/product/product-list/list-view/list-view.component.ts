import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  @Input()
  prodList$: any;

  constructor() { }

  ngOnInit(): void {
  }

}
