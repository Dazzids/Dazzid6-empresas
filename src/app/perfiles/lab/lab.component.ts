import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent {
listaEstudiantes: any[] = [
{ nombre: "tomas", estado: "promocionado"},
{ nombre: "carlos", estado: "promocionado"},

]
}

