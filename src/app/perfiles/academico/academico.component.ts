import { Component, OnInit } from '@angular/core';
import { StorageService } from '/Users/carlossaenz/Library/Mobile Documents/com~apple~CloudDocs/DAzz/landing page/Dazzid-landng-page/Dazzid6/src/app/service/storage.service';
import { AuthService } from 'src/app/services/auth.service';
import { EmailAuthCredential, getAuth, User } from 'firebase/auth';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ProfileComponent } from 'src/app/components/profile/profile.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ViewEncapsulation} from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap, tap } from 'rxjs';
import { ImageUploadService } from 'src/app/services/image-upload.service';
  import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from "src/app/services/empleado.service"
import { user } from '@angular/fire/auth';
import { userInfo } from 'os';
import { UserTrackingService } from '@angular/fire/compat/analytics';

@Component({
  selector: 'app-academico',
  templateUrl: './academico.component.html',
  styleUrls: ['./academico.component.css']
})
export class AcademicoComponent {
  user$ = this.authService.currentUser$;
  empleados: any[] = [];
  academicos: any[] = [];    
  createAcaCred: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titulo = 'Agregar AcaCred';

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private toast: HotToastService,
    private imageUploadService: ImageUploadService,
    private empleadoService: EmpleadoService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router,
    private aRoute: ActivatedRoute,
    
  
    ) {

      this.createAcaCred = this.fb.group({
        nombre: ['', Validators.required],
        apellidoPaterno: ['', Validators.required],
        apellidoMaterno: ['', Validators.required],
        fechaDeNacimiento: ['', Validators.required],
        documento: ['', Validators.required],
        folio: ['', Validators.required],
      })
      this.id = this.aRoute.snapshot.paramMap.get("id");
    console.log(this.id)
    }
  
  
  
      ngOnInit(): void {  
        this.getAcads()
      
      }
      uploadCred(event: any, user: User) {
        this.imageUploadService
          .uploadCred(event.target.files[0], `images/credenciales/${user.uid}`)
          .pipe(
            this.toast.observe({
              loading: 'Subiendo credencial...',
              success: 'Image uploaded successfully',
              error: 'There was an error in uploading the image',
            }),


            
          )
        
          .subscribe();
          
      }
     
    getAcads() {
      this.empleadoService.getAcads().subscribe(data => {
        this.academicos = [];
       data.forEach((element:any) =>{
        this.academicos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        })
  
  });
  console.log(this.academicos);
    });
  }
  
  eliminarAcad(id:string) {
    this.empleadoService.eliminarAcad(id).then(() => {
  console.log("empleado eliminado con exito");
  this.toastr.error("El registro fue eliminado con exito", "Registro eliminado!", {
    positionClass: 'toast-bottom-right'
  }); 
    
  }).catch(error => {
    console.log(error);
    
    })
  }
    
    
     
  
   
    
   
  
  imagenes: any[] = [];
  cargarImagen(event: any) {
  let archivos = event.target.files
  let reader = new FileReader();
  let nombre = this.user$;
  
  for(let i=0; i<archivos.lenght;i++){
  
  }
  
  reader.readAsDataURL(archivos[0]);
  reader.onloadend=() => {
    console.log(reader.result);
  this.imagenes.push(reader.result);
  this.storageService.subirImagen(nombre+"$user"+Date.now(),reader.result).then(urlImagen => {
    console.log(urlImagen);
    let usuario={}
  
  });
  }
  
  
  this.esEditar();
  }
  agregarEditarAcad() {
    this.submitted = true;
    if(this.createAcaCred.invalid){
      return;
    }
    if (this.id == null) {
      this.agregarAcad();
    } else {
      this.editarAcad(this.id);
    }
    }
    agregarAcad() {
      const usuario: User = JSON.parse(localStorage.getItem("user") ||"()");
      const academico: any = {
     
      nombre: this.createAcaCred.value.nombre,
      apellidoPaterno: this.createAcaCred.value.apellidoPaterno,
      apellidoMaterno: this.createAcaCred.value.apellidoMaterno,
      fechaDeNacimiento: this.createAcaCred.value.fechaDeNacimiento,
      documento: this.createAcaCred.value.documento,
      folio: this.createAcaCred.value.folio,
      fechaCreación: new Date(),
      fechaActualizacion: new Date(),
      uid: usuario.uid,
      
    }
  
  
    this.loading = true;
  
    this.empleadoService.agregarAcad(academico)
    .then(() => {
      this.toastr.success('lacredencial fue registrada con exito!', 'Credencial Registrado', {
        positionClass: 'toast-bottom-right'
      });
      this.loading = false;
      this.router.navigate(['/list-empleados']);
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }
  
  editarAcad(id: string) {
    const usuario: User = JSON.parse(localStorage.getItem("user") ||"()");

    const academico: any = {
      nombre: this.createAcaCred.value.nombre,
      apellidoPaterno: this.createAcaCred.value.apellidoPaterno,
      apellidoMaterno: this.createAcaCred.value.apellidoMaterno,
      fechaDeNacimiento: this.createAcaCred.value.fechaDeNacimiento,
      documento: this.createAcaCred.value.documento,
      folio: this.createAcaCred.value.folio,
      fechaCreación: new Date(),
      fechaActualizacion: new Date(),
      uid: usuario.uid,
      

    }
  this.loading = true;
  
  this.empleadoService.actualizarAcad(id, academico).then(() => {
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
      this.empleadoService.getAcad(this.id).subscribe(data => {
  console.log(data.payload.data()["nombre"]);
  this.createAcaCred.setValue({
  nombre: data.payload.data()["nombre"],
  apellidoPaterno: data.payload.data()["apellidoPaterno"],
  apellidoMaterno: data.payload.data()["apellidoMaterno"],
  fechaDeNacimiento: data.payload.data()["fechaDeNacimiento"],
  documento: data.payload.data()["documento"],
  folio: data.payload.data()["folio"],
  
  
  })
      })
    }
  }
  }
  