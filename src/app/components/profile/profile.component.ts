import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { User } from 'firebase/auth';
import { switchMap, tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ImageUploadService } from 'src/app/services/image-upload.service';
import {MatCardModule} from '@angular/material/card';
import { StorageService } from 'src/app/services/storage.service';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({ 
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],

})


export class ProfileComponent implements OnInit {
  user$ = this.authService.currentUser$;

  constructor(
    private authService: AuthService,
    private imageUploadService: ImageUploadService,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {}

  uploadFile(event: any, user: User) {
    this.imageUploadService
      .uploadImage(event.target.files[0], `images/profile/${user.uid}`)
      .pipe(
        this.toast.observe({
          loading: 'Uploading profile image...',
          success: 'Image uploaded successfully',
          error: 'There was an error in uploading the image',
        }),
        switchMap((photoURL) => this.authService.updateProfile({ photoURL }))
      )
      .subscribe();
      
  }
}


