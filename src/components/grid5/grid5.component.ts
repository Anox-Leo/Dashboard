import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-grid5',
  standalone: true,
  imports: [
    NgForOf

  ],
  templateUrl: './grid5.component.html',
  styleUrls: ['./grid5.component.css']
})
export class Grid5Component {

   upcomingEvents: any;

   constructor(){
     this.upcomingEvents = [
       ["Hackathon Informatique", "10/04/24", "Marathon de programmation de 48 heures"],
       ["Semaine de l'Innovation", "22/05/24", "Ateliers et conférences sur les technologies émergentes"],
       ["Journée Portes Ouvertes", "15/03/24", "Présentation des programmes et des projets étudiants"],
       ["Soirée Interculturelle", "30/04/24", "Échange culturel et gastronomique entre étudiants internationaux"]
     ];
   }
}
