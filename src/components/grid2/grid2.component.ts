import { Component, ViewEncapsulation, Renderer2, ElementRef } from '@angular/core';
import { DatePipe, registerLocaleData, CommonModule, NgFor } from '@angular/common';
import {FormsModule} from "@angular/forms";
import DataJSon from "../../ressources-db/data-grid2.json";
import localeFr from '@angular/common/locales/fr';


@Component({
  selector: 'app-grid2',
  standalone: true,
  imports:[
    FormsModule,
    CommonModule,
    NgFor
  ],
  templateUrl: './grid2.component.html',
  styleUrl: './grid2.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class Grid2Component{
  data;

  messages: { From: string; Message: string; DateTime: number; ProfilePicture: string}[];
  constructor(private el: ElementRef, private renderer: Renderer2 ) {
    this.data = DataJSon;
    this.messages = this.loadMessages();
    //console.log(this.messages);
  }

  ngAfterViewInit(): void {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    const chatbox = this.el.nativeElement.querySelector('.chatbox');
    if (chatbox) {
      chatbox.scrollTop = chatbox.scrollHeight;
    }
  }

  public epochToNiceDiscordDate(epoch: number): string {
    var d = new Date(0); 
    d.setUTCSeconds(epoch);
    registerLocaleData(localeFr);
    var newdata = new DatePipe('fr');
    var newFormat = newdata.transform(d, 'le dd/MM/yyyy à hh:mm');
    //console.log(newdata);
    //console.log(newFormat);
    return newFormat || "";
  }

  private loadMessages(): { From: string; Message: string; DateTime: number; ProfilePicture: string}[] {
    return this.data;
  }  
}
