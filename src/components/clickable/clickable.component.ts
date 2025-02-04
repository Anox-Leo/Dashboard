import { AfterViewInit, Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-clickable',
  templateUrl: './clickable.component.html',
  styleUrls: ['./clickable.component.css']
})
export class ClickableComponent implements AfterViewInit{
  @ViewChild('clickableElement', {static: false}) clickableElement!: ElementRef;

  private isDragging = false;
  private hasBeenMoved;
  ngAfterViewInit(): void {
  }

  @Input() clickableData: any;

  constructor(){
    this.hasBeenMoved = false;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.isDragging) {

      const element = this.clickableElement.nativeElement;
      const container = element.parentElement.parentElement;

      const containerRect = container.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();

      const overlappingElements = Array.from(document.querySelectorAll('.clickable'))
        .filter(el => el !== element)
        .map(el => el.getBoundingClientRect())
        .some(rect => this.checkOverlap(elementRect, rect));

        // if(!overlappingElements){
          const left = Math.min(Math.max(event.clientX - elementRect.width / 2, containerRect.left), containerRect.right - elementRect.width);
          const top = Math.min(Math.max(event.clientY - elementRect.height / 2, containerRect.top), containerRect.bottom - elementRect.height);

          element.style.left = left + 'px';
          element.style.top = top + 'px';
        // }
    }
  }

  private checkOverlap(rect1: DOMRect, rect2: DOMRect): boolean {
    return (
      rect1.left < rect2.right &&
      rect1.right > rect2.left &&
      rect1.top < rect2.bottom &&
      rect1.bottom > rect2.top
    );
  }

  @HostListener('document:mouseup')
  onMouseUp(): void {
    this.isDragging = false;
  }

  startDrag(event: MouseEvent): void {
    this.isDragging = true;
    event.preventDefault();
  }
}
