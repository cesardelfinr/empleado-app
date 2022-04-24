import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

//modules
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// componentes
import { AppComponent } from './app.component';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';
import { CreateEmpleadoComponent } from './components/create-empleado/create-empleado.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ListEmpleadosComponent,
    CreateEmpleadoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,AngularFirestoreModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'list-empleados', pathMatch: 'full' },    
      { path: 'list-empleados', component: ListEmpleadosComponent },    
      { path: 'create-empleado', component: CreateEmpleadoComponent },
      { path: 'editEmpleado/:id', component: CreateEmpleadoComponent },
      { path: '**', redirectTo: 'list-empleados', pathMatch: 'full' },
    ]),
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
