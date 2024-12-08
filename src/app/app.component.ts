import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LandingComponent } from "./components/landing/landing.component";
import { AboutComponent } from "./components/about/about.component";


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    LandingComponent,
    RouterModule,
    AboutComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SweetAndSimpleFrontend';
}
