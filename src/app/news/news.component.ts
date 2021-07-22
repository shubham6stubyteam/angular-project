import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  colorRed = '';
  defaultColor = 'white';
  setColor = '';
  redColor = '';
  redColor1 = '';
  yellowColor = '';
  yellowColor1 = '';
  greenColor = '';
  constructor() {}

  ngOnInit(): void {}

  red() {
    this.redColor = 'red';
    this.redColor1 = 'white';
    this.yellowColor = 'white';
    this.yellowColor1 = 'white';
    this.greenColor = 'white';
  }
  red1() {
    this.redColor = 'red';
    this.redColor1 = 'red';
    this.yellowColor = 'white';
    this.yellowColor1 = 'white';
    this.greenColor = 'white';
  }

  yellow() {
    this.redColor = 'yellow';
    this.redColor1 = 'yellow';
    this.yellowColor = 'yellow';
    this.yellowColor1 = 'white';
    this.greenColor = 'white';
  }

  yellow1() {
    this.yellowColor = 'yellow';
    this.yellowColor1 = 'yellow';
    this.redColor = 'yellow';
    this.redColor1 = 'yellow';
    this.greenColor = 'white';
  }

  green() {
    this.greenColor = 'green';
    this.yellowColor = 'green';
    this.yellowColor1 = 'green';
    this.redColor = 'green';
    this.redColor1 = 'green';
  }
}
