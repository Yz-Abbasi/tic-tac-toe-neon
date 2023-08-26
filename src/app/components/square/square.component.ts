import { Component, Inject, OnInit, Input } from '@angular/core';
import { GameService } from 'src/app/services/game/game.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.sass']
})
export class SquareComponent implements OnInit {
  @Input() square : any;

  private gameService = Inject(GameService);

  constructor() { }

  ngOnInit(): void {
  }

}
