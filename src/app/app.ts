import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponentComponent } from "./shared/navbar-component/navbar-component.component";
import { FooterComponentComponent } from "./shared/footer-component/footer-component.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponentComponent, FooterComponentComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('urbe');
}
