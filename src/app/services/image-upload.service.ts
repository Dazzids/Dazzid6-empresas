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
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireStorage} from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root',
})
export class ImageUploadService {
  currentUser$ = authState(this.auth);
  constructor(private storage: Storage,
    private auth: Auth,
    
    ) {}

  uploadImage(image: File, path: string): Observable<string> {
    const storageRef = ref(this.storage, path);
    const uploadTask = from(uploadBytes(storageRef, image));
    return uploadTask.pipe(switchMap((result) => getDownloadURL(result.ref)));
  }
    uploadCred(cred: File, path: string): Observable<string> {
      const storageRef = ref(this.storage, path);
      const uploadTask = from(uploadBytes(storageRef, cred));
      return uploadTask.pipe(switchMap((result) => getDownloadURL(result.ref)));
  }
}
