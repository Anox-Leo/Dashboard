import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Grid2Component } from '../components/grid2/grid2.component';
import { Grid3Component } from '../components/grid3/grid3.component';
import { Grid4Component } from '../components/grid4/grid4.component';
import { Grid5Component } from "../components/grid5/grid5.component";
import { CalendarComponent} from "../components/calendar/calendar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Grid4Component, Grid5Component, Grid3Component,Grid2Component, CalendarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashbord-project';
}
