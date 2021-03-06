import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { VeterinaryComponent } from './components/veterinary/veterinary.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';

import { AdminModule } from './admin/admin.module';
import { EventComponent } from './components/event/event.component';
import { AddVeterinaryComponent } from './components/veterinary/add-veterinary/add-veterinary.component';
import { ListVeterinaryComponent } from './components/veterinary/list-veterinary/list-veterinary.component';
import { DetailVeterinaryComponent } from './components/veterinary/detail-veterinary/detail-veterinary.component';
import { EditVeterinaryComponent } from './components/veterinary/edit-veterinary/edit-veterinary.component';
import { AddNewsComponent } from './components/news/add-news/add-news.component';
import { ListNewsComponent } from './components/news/list-news/list-news.component';


import { SimpleTinyComponent } from './components/simple-tiny/simple-tiny.component';
import { EllipsisPipe } from './pipe/ellipsis.pipe';
import { DetailNewsComponent } from './components/news/detail-news/detail-news.component';
import { EditNewsComponent } from './components/news/edit-news/edit-news.component';

@NgModule({
  declarations: [
    AppComponent,
    VeterinaryComponent,
    ContactComponent,
    HomeComponent,
    NewsComponent,
    EventComponent,
    AddVeterinaryComponent,
    ListVeterinaryComponent,
    DetailVeterinaryComponent,
    EditVeterinaryComponent,
    AddNewsComponent,
    ListNewsComponent,
    SimpleTinyComponent,
    EllipsisPipe,
    DetailNewsComponent,
    EditNewsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AdminModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
