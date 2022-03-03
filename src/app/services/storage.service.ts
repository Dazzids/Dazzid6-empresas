import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { environment } from 'src/environments/environment';
import {
  Auth,
  signInWithEmailAndPassword,
  authState,
  createUserWithEmailAndPassword,
  updateProfile,
  UserInfo,
} from '@angular/fire/auth';
import { getDownloadURL } from 'firebase/storage';

firebase.initializeApp(environment.firebase);

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  currentUser$ = authState(this.auth);
  storareRef = firebase.app().storage().ref();

  constructor(
    private storage: Storage,
    private auth: Auth) { }


  async subirImagen(nombre: string, imgBase64: any) {
    
    const user = this.auth.currentUser;
    try {
      let respuesta = await this.storareRef.child(user + nombre).putString(imgBase64, 'data_url');
      console.log(respuesta);
      return await respuesta.ref.getDownloadURL();
    } catch (err) {
      console.log(err);
      return null;
    }

  }
}