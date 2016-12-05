import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { CLIENTS } from '../data/clients';

@Injectable()
export class ClientsService {
  private _clients: Array<Client>;

  constructor() { }

  getClients(): Promise<Array<Client>> {
    if (!this._clients) {
      this._clients = CLIENTS.map(item => {
        let client = new Client();
        client.fromJSON(item);
        return client;
      });
    }
    return Promise.resolve(this._clients);
  }

  findClient(id: number): Promise<Client> {
    return Promise.resolve(this._clients.find(client => client.id === id));
  }
}
