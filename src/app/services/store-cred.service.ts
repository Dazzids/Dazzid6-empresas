import { Injectable } from '@angular/core';
import {
  getDownloadURL,
  ref,
  Storage,
  uploadBytes,
} from '@angular/fire/storage';
import {
  Auth,
  signInWithEmailAndPassword,
  authState,
  createUserWithEmailAndPassword,
  updateProfile,
  UserInfo,
} from '@angular/fire/auth';
import { finalize, from, map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreCredService {
  currentUser$ = authState(this.auth);
  constructor(private storage: Storage,
    private auth: Auth) {}

 
    uploadCred(image: File, path: string): Observable<string> {
     
      const user = this.auth.currentUser;
      const storageRef = ref(this.storage, path);
      const uploadTask = from(uploadBytes(storageRef, image));
      return uploadTask.pipe(switchMap((result) => getDownloadURL(result.ref)));
  }
}
