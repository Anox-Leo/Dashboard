import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-grid4',
  standalone: true,
  imports: [
    NgForOf

  ],
  templateUrl: './grid4.component.html',
  styleUrls: ['./grid4.component.css']
})
export class Grid4Component {

   upcomingEvents: any;

   constructor(){
     this.upcomingEvents = [
       ["Conférence en informatique", "15/05/24", "Conférence sur les dernières tendances et avancées en informatique"],
       ["Examen de programmation", "21/09/24", "Examen final pour le cours de programmation avancée"],
       ["Présentation de PFE", "Du 03/02/24 au 28/02/24", "Présentation et défense du projet de fin d'études en développement logiciel"],
       ["Session de révision", "21/06/24", "Séances de révision organisées avant les examens finaux"]
     ];
   }
}
