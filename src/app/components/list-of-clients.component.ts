import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../models/client';

@Component({
  selector: 'app-list-of-clients',
  templateUrl: './list-of-clients.component.html',
  styleUrls: ['./list-of-clients.component.scss']
})
export class ListOfClientsComponent implements OnInit {
  @Input()
  clients: Array<Client>;

  @Output() clientSelected: EventEmitter<Client> = new EventEmitter<Client>();

  constructor() { }

  selectListItem(event: Client): void {
    this.clientSelected.emit(event);
  }

  ngOnInit() {
  }

}
