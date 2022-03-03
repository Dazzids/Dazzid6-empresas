import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as e from 'express';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '/Users/carlossaenz/Library/Mobile Documents/com~apple~CloudDocs/DAzz/landing page/Dazzid-landng-page/Dazzid6/src/app/service/storage.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'firebase/auth';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap, tap } from 'rxjs';
import { ImageUploadService } from 'src/app/services/image-upload.service';
import {MatCardModule} from '@angular/material/card';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'app-create-empleado',
  templateUrl: './create-empleado.component.html',
  styleUrls: ['./create-empleado.component.css']
})
export class CreateEmpleadoComponent implements OnInit {
  createEmpleado: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titulo = 'Agregar Credencial';

  constructor(private fb: FormBuilder,
    private _empleadoService: EmpleadoService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute,
    private storageService: StorageService,
    private authService: AuthService,
    private imageUploadService: ImageUploadService,
    private toast: HotToastService){ 
    

    this.createEmpleado = this.fb.group({
      nombre: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      fechaDeNacimiento: ['', Validators.required],
      documento: ['', Validators.required],
      folio: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get("id");
  console.log(this.id)
  }
  

  ngOnInit(): void {
    this.esEditar();
  }
  agregarEditarEmpleado() {
    this.submitted = true;
    if(this.createEmpleado.invalid){
      return;
    }
    if (this.id == null) {
      this.agregarEmpleado();
    } else {
      this.editarEmpleado(this.id);
    }
    }
    agregarEmpleado() {
    const empleado: any = {
      nombre: this.createEmpleado.value.nombre,
      apellidoPaterno: this.createEmpleado.value.apellidoPaterno,
      apellidoMaterno: this.createEmpleado.value.apellidoMaterno,
      fechaDeNacimiento: this.createEmpleado.value.fechaDeNacimiento,
      documento: this.createEmpleado.value.documento,
      folio: this.createEmpleado.value.folio,
      fechaCreación: new Date(),
      fechaActualizacion: new Date(),
    }
    this.loading = true;
    this._empleadoService.agregarEmpleado(empleado).then(() => {
      this.toastr.success('La credencial fue registrada con exito!', 'Credencial Registrada', {
        positionClass: 'toast-bottom-right'
      });
      this.loading = false;
      this.router.navigate(['/list-empleados']);
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }

  editarEmpleado( id: string) {
    const empleado: any = {
      nombre: this.createEmpleado.value.nombre,
      apellidoPaterno: this.createEmpleado.value.apellidoPaterno,
      apellidoMaterno: this.createEmpleado.value.apellidoMaterno,
      fechaDeNacimiento: this.createEmpleado.value.fechaDeNacimiento,
      documento: this.createEmpleado.value.documento,
      folio: this.createEmpleado.value.folio,
      fechaCreación: new Date(),
      fechaActualizacion: new Date(),
    }
this.loading = true;

this._empleadoService.actualizarEmpleado(id, empleado).then(() => {
  this.loading = false;
  this.toastr.info('La credencial fue modificada con exito', 'Credencial modificada', {
    positionClass: 'toast-bottom-right'
  })
  this.router.navigate(['/list-empleados']);
})
}

  esEditar() {
    this.titulo = 'Editar Credencial'
    if (this.id !== null) {
      this.loading = true;
      this._empleadoService.getEmpleado(this.id).subscribe(data => {
console.log(data.payload.data()["nombre"]);
this.createEmpleado.setValue({
  nombre: data.payload.data()["nombre"],
  apellidoPaterno: data.payload.data()["apellidoPaterno"],
  apellidoMaterno: data.payload.data()["apellidoMaterno"],
  fechaDeNacimiento: data.payload.data()["fechaDeNacimiento"],
  documento: data.payload.file()["documento"],
  folio: data.payload.data()["folio"],


})
      })
    }
  }

}