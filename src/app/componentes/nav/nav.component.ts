import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from "../../servicios/auth-service.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public authservice:AuthServiceService) { }

  ngOnInit(): void {
  }

}
