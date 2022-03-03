import { Component, NgModule, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatCard } from '@angular/material/card';
import { MatCardActions } from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import { HotToastService } from '@ngneat/hot-toast';
import { User } from 'firebase/auth';
import { switchMap, tap } from 'rxjs';
import { ImageUploadService } from 'src/app/services/image-upload.service';


const material = [
MatCardModule,
MatCard,
MatCardActions

]
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {

  user$ = this.authService.currentUser$;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    
  }

}
