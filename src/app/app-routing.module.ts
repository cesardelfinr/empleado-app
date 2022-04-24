import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateEmpleadoComponent } from "./components/create-empleado/create-empleado.component";
import { ListEmpleadosComponent } from "./components/list-empleados/list-empleados.component";

const routes: Routes = [
    { path: '', redirectTo: 'list-empleados', pathMatch: 'full' },    
    { path: 'list-empleados', component: ListEmpleadosComponent },    
    { path: 'create-empleado', component: CreateEmpleadoComponent },
    { path: 'editEmpleado/:id', component: CreateEmpleadoComponent },
    { path: '**', redirectTo: 'list-empleados', pathMatch: 'full' }  
];

@NgModule({})

export class AppRoutingModule { }