import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { orderBy, where } from 'firebase/firestore';
import { Observable, of, from, switchMap, finalize } from 'rxjs';
import { StorageService } from './storage.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AuthService } from 'src/app/services/auth.service';

import {
  Auth,
  signInWithEmailAndPassword,
  authState,
  createUserWithEmailAndPassword,
  updateProfile,
  UserInfo,
} from '@angular/fire/auth';
import {
  getDownloadURL,
  ref,
  Storage,
  uploadBytes,
} from '@angular/fire/storage';
import { ImageUploadService } from './image-upload.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  currentUser$ = authState(this.auth);
  user$ = this.authService.currentUser$;


  constructor(
    private firestore: AngularFirestore,
    private auth: Auth,
    private storage: Storage,
    private db: AngularFireDatabase,
    private authService: AuthService,
    private imageUploadService: ImageUploadService,

    
    ) {}

   
  agregarEmpleado(empleado: any): Promise<any> {
    const user = this.auth.currentUser;

    return this.firestore.collection("empleados").add(empleado);
  }

  getEmpleados(): Observable<any> {
    
    return this.firestore.collection('empleados', ref => ref.orderBy('fechaCreación', 'asc')).snapshotChanges();

  }
  eliminarEmpleado(id:string): Promise<any> {
    
return this.firestore.collection('empleados').doc(id).delete();

  }
  getEmpleado(id:string): Observable<any> {
    return this.firestore.collection("empleados").doc(id).snapshotChanges();
  }
  actualizarEmpleado(id: string, data:any): Promise<any> {
    return this.firestore.collection('empleados').doc(id).update(data);
  }



  agregarAcad(academico: any): Promise<any> {
    const user = this.auth.currentUser;

    return this.firestore.collection("academico").add(academico);
  }

  getAcads(): Observable<any> {
    const user = this.auth.currentUser;
    const storageRef = ref(this.storage);

    return this.firestore.collection('academico', ref => ref.orderBy('fechaCreación', 'asc', )).snapshotChanges();
    

  }
  eliminarAcad(id:string): Promise<any> {
return this.firestore.collection('academico').doc(id).delete();

  }
  getAcad(uid:string): Observable<any> {
    return this.firestore.collection("academico").doc(uid).snapshotChanges();
  }
  actualizarAcad(id: string, data:any): Promise<any> {
    return this.firestore.collection('academico').doc(id).update(data);
  }
  subirImagen(id: string, imgBase64: any): Promise<any>  {

    
    return this.firestore.collection('academico').doc(id).update(imgBase64);
  }
  getAcadByIdUser(uid:string): Observable<any> {
  return this.firestore.collection("academico", ref => ref.where("uid", "==", uid)).snapshotChanges()
}
}
