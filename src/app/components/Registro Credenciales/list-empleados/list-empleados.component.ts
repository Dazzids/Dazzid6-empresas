import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgxDropzoneImagePreviewComponent } from 'ngx-dropzone';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { FileUpload } from 'src/app/models/user-profile';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent implements OnInit {
  user$ = this.authService.currentUser$;
  empleados: any[] = [];

  constructor(private _empleadoService: EmpleadoService,
    private toastr: ToastrService,
    private authService: AuthService,

    
    ) {}


  ngOnInit(): void {  
    this.getEmpleados()
  }
  getEmpleados() {
    this._empleadoService.getEmpleados().subscribe(data => {
      this.empleados = [];
     data.forEach((element:any) =>{
      this.empleados.push({
        id: element.payload.doc.id,
        ...element.payload.doc.data(),
      })

});
console.log(this.empleados);
  });
}

eliminarEmpleado(id:string) {
  this._empleadoService.eliminarEmpleado(id).then(() => {
console.log("empleado eliminado con exito");
this.toastr.error("El registro fue eliminado con exito", "Registro eliminado!", {
  positionClass: 'toast-bottom-right'
}); 
  
}).catch(error => {
  console.log(error);
  
  })
}
}
