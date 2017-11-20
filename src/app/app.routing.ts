import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components

import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewsComponent } from './components/news/news.component';
import { VeterinaryComponent } from './components/veterinary/veterinary.component';
//children of veterinary
import { AddVeterinaryComponent } from './components/veterinary/add-veterinary/add-veterinary.component';
import { ListVeterinaryComponent } from './components/veterinary/list-veterinary/list-veterinary.component';


const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path:'contact', component: ContactComponent},
	{
		path:'veterinary', 
		component: VeterinaryComponent,
		children: [
			{ path: '', redirectTo: '/veterinary/list', pathMatch: 'full'},
			{ path: 'list', component: ListVeterinaryComponent },
			{ path: 'add', component: AddVeterinaryComponent }
		]
	},
	{path:'news', component: NewsComponent},
	{path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
