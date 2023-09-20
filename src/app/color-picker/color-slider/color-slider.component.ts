import { Component, ElementRef, AfterViewInit, ViewChild, HostListener, Output, EventEmitter } from '@angular/core';
import { hide } from '@popperjs/core';

@Component({
  selector: 'app-color-slider',
  templateUrl: './color-slider.component.html',
  styleUrls: ['./color-slider.component.sass']
})
export class ColorSliderComponent implements AfterViewInit {
  @ViewChild("canvas") canvas : ElementRef<HTMLCanvasElement>;
  private ctx : CanvasRenderingContext2D;
  ctxStrokeColor : any;

  @Output() color : EventEmitter<string> = new EventEmitter(); 

  isMouseMovingDown : boolean = false;
  selectedHeight : number;

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

    if(this.selectedHeight){
      this.ctx.beginPath();
      this.ctx.strokeStyle = this.ctxStrokeColor;
      this.ctx.lineWidth = 3;
      this.ctx.rect(0, this.selectedHeight - 5, width, 10);
      this.ctx.stroke();
      this.ctx.closePath();
    }
  }

  mouseDown(mouseEvent : MouseEvent): any {
    this.isMouseMovingDown = true;
    this.selectedHeight = mouseEvent.offsetY;
    this.draw();
    this.emitColor(mouseEvent.offsetX, mouseEvent.offsetY)
  }

  mouseMove(mouseEvent : MouseEvent): any {
    if (this.mouseDown){
      this.selectedHeight = mouseEvent.offsetY;
      this.draw();
      this.emitColor(mouseEvent.offsetX, mouseEvent.offsetY);
    }
  }

  emitColor(x : number, y : number){
    const rgbaColor = this.getColorAtPosition(x, y);
    console.log(rgbaColor);
    this.ctxStrokeColor = rgbaColor;
    this.color.emit(rgbaColor);
  }

  getColorAtPosition(x: number, y: number) {
    const imageData = this.ctx.getImageData(x, y, 1, 1).data;
    return "rgba(" + imageData[0] + "," + imageData[1] + "," + imageData[2] + ",1";
  }
  
  @HostListener("window:mouseUp", ['$event']) onMuseUp(mouseEvent : MouseEvent){
    this.isMouseMovingDown = false;
  }
}