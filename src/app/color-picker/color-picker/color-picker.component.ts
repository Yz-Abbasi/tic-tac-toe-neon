import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { hide } from '@popperjs/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.sass']
})
export class ColorPickerComponent implements AfterViewInit {
  @ViewChild("canvas") canvas : ElementRef<HTMLCanvasElement>;
  private ctx : CanvasRenderingContext2D;

  constructor() { }

  ngAfterViewInit(): void {
    this.draw();
  }

  draw(){
    if(!this.ctx){
      this.ctx = this.canvas.nativeElement.getContext("2d");
    }

    const width = this.canvas.nativeElement.width;
    const height = this.canvas.nativeElement.height;
    this.ctx.clearRect(0, 0, width, height)

  const gradient = this.ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, 'rgba(255, 0, 0, 1)');
  gradient.addColorStop(0.17, 'rgba(255, 255, 0, 1)');
  gradient.addColorStop(0.34, 'rgba(0, 255, 0, 1)');
  gradient.addColorStop(0.51, 'rgba(0, 255, 255, 1)');
  gradient.addColorStop(0.68, 'rgba(0, 0, 255, 1)');
  gradient.addColorStop(0.85, 'rgba(255, 0, 255, 1)');
  gradient.addColorStop(1, 'rgba(255, 0, 0, 1)');

  this.ctx.beginPath();
  this.ctx.rect(0, 0, width, height);
  this.ctx.fillStyle = gradient;
  this.ctx.fill();
  this.ctx.closePath();
  }

  mouseDown(mouseEvent : Event): any {

  }

  mouseMove(mouseEvent : Event): any {

  }
}