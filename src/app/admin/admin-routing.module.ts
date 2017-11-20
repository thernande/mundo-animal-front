import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

//componentes

import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { LoginComponent } from './components/login/login.component';

import { AdminGuard } from '../services/admin.guard';

const adminRoutes: Routes =[
	{
		path: 'admin-panel',
		component: MainComponent,
		canActivate: [AdminGuard],
		children: [
			{ path: '', redirectTo: 'listado', pathMatch: 'full'},
			{ path: 'listado', component: ListComponent },
			{ path: 'add', component: AddComponent },
			{ path: 'edit/:id', component: EditComponent }
		]
	},
	{ path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
  	RouterModule
  ]
})
export class AdminRoutingModule { }
