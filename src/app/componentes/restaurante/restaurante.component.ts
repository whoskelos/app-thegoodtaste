import { Component, Input, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/models/restaurante';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit {

  @Input() restaurante:Restaurante = new Restaurante();

  constructor() { }

  ngOnInit(): void {
  }

}
