import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//modulos

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from "@angular/material/slider";
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {AngularFireModule} from '@angular/fire/compat';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule, BUCKET } from "@angular/fire/compat/storage";
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { ToastrModule } from 'ngx-toastr';
import { AuthService } from './services/auth.service';



//componentes

import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { HotToastModule } from '@ngneat/hot-toast';
import { LandingComponent } from './components/landing/landing.component';
import { MatMenuModule } from '@angular/material/menu';
import { ProfileComponent } from './components/profile/profile.component';
import { getStorage, provideStorage } from '@angular/fire/storage';




import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';


import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';



import { AcademicoComponent } from './perfiles/academico/academico.component';
import { DazzidComponent } from './perfiles/dazzid/dazzid.component';
import { HabComponent } from './perfiles/hab/hab.component';
import { LabComponent } from './perfiles/lab/lab.component';
import { MedComponent } from './perfiles/med/med.component';
import { ListEmpleadosComponent } from './components/Registro Credenciales/list-empleados/list-empleados.component';
import { CreateEmpleadoComponent } from './components/Registro Credenciales/create-empleado/create-empleado.component';
import { CredAcadComponent } from './components/Registro Credenciales/cred-acad/cred-acad.component';
const firebaseConfig = [
  AngularFireStorageModule,
  AngularFireModule.initializeApp(environment.firebase), // Your config
  AngularFireAnalyticsModule,
  AngularFirestoreModule,
  AngularFirestoreDocument,
 


];

const materialModules = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatGridListModule,
  MatSidenavModule,
  MatSelectModule
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    LandingComponent,
    HomeComponent,
    ProfileComponent,
    AcademicoComponent,
    DazzidComponent,
    HabComponent,
    LabComponent,
    MedComponent,
    ListEmpleadosComponent,
    CreateEmpleadoComponent,
    CredAcadComponent,
   
  
   
 
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    HotToastModule.forRoot(),
    MatMenuModule,  
    MatSliderModule,
    HttpClientModule,
    NgxDropzoneModule,
    MatCardModule,
    FlexLayoutModule,
    ToastrModule.forRoot(),
   
     
    MatSelectModule,
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,

    
  

  ],
 
  
  providers: [  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
export class AngularMaterialModule { }

