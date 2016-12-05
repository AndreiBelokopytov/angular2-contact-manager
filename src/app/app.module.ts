import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { ListOfClientsComponent } from './components/list-of-clients.component';
import { ClientDetailsComponent } from './components/client-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfClientsComponent,
    ClientDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
