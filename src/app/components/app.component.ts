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
  selectedClient: Client;
  sidebarIsToggled: boolean = false;

  selectClient(client: Client): void {
    this.selectedClient = client;
  }

  ngOnInit() {
    this.clients = CLIENTS.map(item => {
      let client = new Client();
      client.fromJSON(item);
      return client;
    });
  }

  toggleSidebar(): void {
    this.sidebarIsToggled = !this.sidebarIsToggled;
  }
}
