import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

import { AcademicoComponent } from './perfiles/academico/academico.component';
import { DazzidComponent } from './perfiles/dazzid/dazzid.component';
import { HabComponent } from './perfiles/hab/hab.component';
import { LabComponent } from './perfiles/lab/lab.component';
import { MedComponent } from './perfiles/med/med.component';
import { CreateEmpleadoComponent } from './components/Registro Credenciales/create-empleado/create-empleado.component';
import { ListEmpleadosComponent } from './components/Registro Credenciales/list-empleados/list-empleados.component';
import { RecuperarPasswordComponent } from './components/usuario/recuperar-password/recuperar-password.component';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { ProfileComponent } from './components/profile/profile.component';
import { CredAcadComponent } from './components/Registro Credenciales/cred-acad/cred-acad.component';
import { CrearCredencialComponent } from './components/usuario/crear-credencial/crear-credencial.component';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',component: LandingComponent,
  },
  { path: "recuperarPassword", component: RecuperarPasswordComponent},

  {
    path: 'usuario', loadChildren: () => import('./components/usuario/usuario.module')
      .then(m => m.UsuarioModule)
  },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'home',
    component: HomeComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'profile',
    component: ProfileComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },

  {
    path: 'academico',
    component: AcademicoComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },

  {
    path: 'dazzid',
    component: DazzidComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'habilidades',
    component: HabComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'laboral',
    component: LabComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'medico',
    component: MedComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  { path: 'list-empleados', component: ListEmpleadosComponent },
  { path: 'create-empleado', component: CreateEmpleadoComponent },
  { path: 'editEmpleado/:id', component: CreateEmpleadoComponent },
  { path: 'editAcad/:id', component: CreateEmpleadoComponent },
  { path: 'credAcad', component: CredAcadComponent},
  { path: "crearCredencial", component: CrearCredencialComponent}

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
