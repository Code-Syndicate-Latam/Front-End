import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signin-component',
  templateUrl: './signin-component.component.html',
  imports: [RouterLink,RouterModule]
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
