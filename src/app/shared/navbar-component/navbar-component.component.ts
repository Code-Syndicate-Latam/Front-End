import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  imports: [RouterLink,RouterModule],
})
export class NavbarComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
