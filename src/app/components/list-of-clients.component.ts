import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../models/client';

@Component({
  selector: 'app-list-of-clients',
  templateUrl: './list-of-clients.component.html',
  styleUrls: ['./list-of-clients.component.scss']
})
export class ListOfClientsComponent implements OnInit {
  @Input()
  clients: Array<Client>;
  selectedClient: Client;
  private _originalClients: Array<Client>;

  constructor() { }

  search(searchString: string): void {
    if (!this._originalClients) {
      this._originalClients = this.clients.slice();
    }
    this.clients = this._originalClients.filter(client => {
      return client.searchThroughFields(searchString);
    });
  }

  ngOnInit() {
  }

}
