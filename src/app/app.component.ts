import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import {MatCardModule} from '@angular/material/card';

const materialModules = [
  MatCardModule,
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor(public authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}
