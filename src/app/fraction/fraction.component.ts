import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-fraction',
  templateUrl: './fraction.component.html',
  styleUrls: ['./fraction.component.scss']
})

export class FractionComponent implements OnInit {
  money: any;
  change: any;
  fraction = [100000, 50000, 20000, 10000, 5000, 1000, 500, 100, 50];
  fcount = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  constructor() {
  }

  ngOnInit() {
  }

  // function money fraction
  onSubmit() {
    let i = 0; let creminder = this.money; let ccoin;
    while (i < this.fraction.length) {
      while (this.fraction[i] <= creminder) {
        creminder = creminder - this.fraction[i];
        ccoin = this.fcount[i];
        ccoin += 1;
        this.fcount[i] = ccoin;
      }
      i++;
    }
    this.change = creminder;
    console.log(this.fcount);
    console.log(this.money);
    console.log(this.change);
  }

  // function clear input
  onClear() {
    this.money = null;
    this.fcount = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.change = null;
  }

}
