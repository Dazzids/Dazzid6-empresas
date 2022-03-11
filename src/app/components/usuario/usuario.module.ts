import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { VerificarCorreoComponent } from './verificar-correo/verificar-correo.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CrearCredencialComponent } from './crear-credencial/crear-credencial.component';


@NgModule({
  declarations: [
  
    RecuperarPasswordComponent,
       VerificarCorreoComponent,
       CrearCredencialComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
  
  ]
})
export class UsuarioModule { }
