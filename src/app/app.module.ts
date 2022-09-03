import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Importando Firebase modules + environment
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { AddTesteComponent } from './add-teste/add-teste.component';
import { EditTesteComponent } from './edit-teste/edit-teste.component';
import { TesteListaComponent } from './teste-lista/teste-lista.component';
// Import abaixo módulos para NGX Toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Paginacao NGX 
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [AppComponent, AddTesteComponent, EditTesteComponent, TesteListaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}