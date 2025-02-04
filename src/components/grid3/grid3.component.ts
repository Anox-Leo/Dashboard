import { Component, ViewEncapsulation, Renderer2, ElementRef } from '@angular/core';
import { DatePipe, registerLocaleData, CommonModule, NgFor } from '@angular/common';
import {ClickableComponent} from "../clickable/clickable.component";
import { ClickableModule } from '../clickable/clickable.module';
import {FormsModule} from "@angular/forms";
import DataJSon from "../../ressources-db/data-grid3.json";
import localeFr from '@angular/common/locales/fr';


@Component({
  selector: 'app-grid3',
  standalone: true,
  imports:[
    FormsModule,
    CommonModule,
    NgFor,
    ClickableModule
  ],
  templateUrl: './grid3.component.html',
  styleUrl: './grid3.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class Grid3Component{
  data;
  someData = "Test à afficher"
  ideas: { Date: number; Visible: string; Contenu: string}[];
  constructor(private el: ElementRef, private renderer: Renderer2 ) {
    this.data = DataJSon;
    this.ideas = this.data.ideas;
  }
}

