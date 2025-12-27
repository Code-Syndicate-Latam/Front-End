import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-singin-component',
  templateUrl: './singin-component.component.html',
  imports: [RouterLink,RouterModule]
})
export class SinginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
