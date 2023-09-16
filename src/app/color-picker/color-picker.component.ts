import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.sass']
})
export class ColorPickerComponent implements OnInit {
  public color : string;
  public hue : string

  constructor() { }

  ngOnInit(): void {
  }

}
