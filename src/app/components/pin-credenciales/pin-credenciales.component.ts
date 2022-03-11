import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pin-credenciales',
  templateUrl: './pin-credenciales.component.html',
  styleUrls: ['./pin-credenciales.component.css']
})
export class PinCredencialesComponent implements OnInit {
error= false;
pin= "";

  constructor() { }

  ngOnInit(): void {
  }

  ingresar(){

// validar si el usuario no ingresa ningun caracter
    if(this.pin == "") {

    this.error = true;

    setTimeout(() => {
      this.error = false;
    },3000);
  }
}}
