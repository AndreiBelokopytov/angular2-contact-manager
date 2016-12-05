import { Component, OnInit, Injectable } from '@angular/core';
import { Client } from '../models/client';
import { ActivatedRoute } from '@angular/router';
import { ClientsService } from '../services/clients.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
@Injectable()
export class ClientDetailsComponent implements OnInit {
  client: Client;

  constructor(
    private _route: ActivatedRoute,
    private _clientsService: ClientsService
    ) { }

  ngOnInit() {
    this._route.params.switchMap(params => {
      return this._clientsService.findClient(+params['id']);
    }).subscribe(client => this.client = client);
  }

}
