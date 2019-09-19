import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-gol-form',
  templateUrl: './gol-form.component.html',
  styleUrls: ['./gol-form.component.css']
})
export class GolFormComponent implements OnInit {

  newGoal = new Goal(0, "", "", new Date ());
  @Output() addGoal = new EventEmitter<Goal>();

  submitGoal(){
    this.addGoal.emit(this.newGoal);
  }

  constructor() { }

  ngOnInit() {
  }

}
