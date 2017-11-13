import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { VeterinaryComponent } from './components/veterinary/veterinary.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';

import { AdminModule } from './admin/admin.module';
import { EventComponent } from './components/event/event.component';
import { AddVeterinaryComponent } from './components/veterinary/add-veterinary/add-veterinary.component';

@NgModule({
  declarations: [
    AppComponent,
    VeterinaryComponent,
    ContactComponent,
    HomeComponent,
    NewsComponent,
    EventComponent,
    AddVeterinaryComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule,
    AdminModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
