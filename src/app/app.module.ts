import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app.component';
import { ListOfClientsComponent } from './components/list-of-clients.component';
import { ClientDetailsComponent } from './components/client-details.component';
import { EmptyClientComponent } from './components/empty-client.component';

import { ClientsService } from './services/clients.service';

@NgModule({
  declarations: [
    AppComponent,
    ListOfClientsComponent,
    ClientDetailsComponent,
    EmptyClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: EmptyClientComponent
      },
      {
        path: 'client/:id',
        component: ClientDetailsComponent
      }
    ])
  ],
  providers: [
    ClientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
