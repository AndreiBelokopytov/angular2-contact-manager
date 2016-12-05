import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { CLIENTS } from '../data/clients';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  clients: Array<Client>;

  selectClient(client: Client): void {
    console.log('CLient selected', client.fullName);
  }

  ngOnInit() {
    this.clients = CLIENTS.map(item => {
      let client = new Client();
      client.fromJSON(item);
      return client;
    });
  }
}
