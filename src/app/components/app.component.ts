import { Component, OnInit, Injectable} from '@angular/core';
import { Client } from '../models/client';
import { ClientsService } from '../services/clients.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Injectable()
export class AppComponent implements OnInit {
  clients: Array<Client>;
  sidebarIsToggled: boolean = false;

  constructor(
    private _clientsService: ClientsService
  ){}

  ngOnInit() {
    this._clientsService.getClients().then(clients => {
      this.clients = clients;
    })
  }

  toggleSidebar(): void {
    this.sidebarIsToggled = !this.sidebarIsToggled;
  }
}
