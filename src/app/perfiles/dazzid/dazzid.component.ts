import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {MatTooltipModule} from '@angular/material/tooltip';
import {ViewEncapsulation} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { StorageService } from 'src/app/services/storage.service';
import { HotToastService } from '@ngneat/hot-toast';
import { User } from 'firebase/auth';
import { switchMap, tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ImageUploadService } from 'src/app/services/image-upload.service';

@Component({
  selector: 'app-dazzid',
  templateUrl: './dazzid.component.html',
  styleUrls: ['./dazzid.component.css']
})
export class DazzidComponent implements OnInit {
  user$ = this.authService.currentUser$;

  constructor(
    private authService: AuthService,
    private imageUploadService: ImageUploadService,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {}
 uploadCred(event: any, user: User) {
    this.imageUploadService
      .uploadCred(event.target.files[0], `images/credenciales/${user.uid}`)
      .pipe(
        this.toast.observe({
          loading: 'Subiendo credencial...',
          success: 'Credencial subida exitosamente',
          error: 'Error al subir la credencial',
        }),
      )
      .subscribe();
      
  }
}
