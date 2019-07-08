import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-fraction',
  templateUrl: './fraction.component.html',
  styleUrls: ['./fraction.component.scss']
})

export class FractionComponent implements OnInit {
  public money: number;
  fraction = [100000, 50000, 20000, 10000, 5000, 1000, 500, 100, 50];
  fcount = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  constructor() {
  }

  ngOnInit() {
    function computeChange(fraction: any, money: number) {
      let i = 0; let creminder = this.money; let ccoin: number;

      while (i < this.fraction.length) {
        while (this.fraction[i] <= creminder) {
          creminder = creminder - this.fraction[i];
          ccoin = this.fcount[i];
          ccoin += 1;
          this.fcount[i] = ccoin;

        }

        i++;
      }

      return this.fcount;
    }

    // ===================================================================
    // ======== Everything below here simply displays your output ========
    // ======== Do NOT change anything below this line ===================
    // ===================================================================


    function rightJustify(s: string, w: number) {
      // return a string of width w with s in the rightmost characters and
      // at least one space on the left. For simplicity, assume w < 20.
      const slen = s.length;
      const blanks = '                    ';
      return blanks.substr(0, Math.min(20, Math.max(1, w - slen))) + s;
    }


    function makeChange() {
      // compute change as an array: each element of change tells
      // how many of the corresponding value in this.fraction to give. The
      // total value should equal this.money.
      let change = computeChange(this.fraction, this.money);
      // now format the results. Output should look like:
      // NUMBER   VALUE
      //    1       50
      //    0       25
      //    1       10
      //    1        5
      //    3        1
      // TOTAL this.money: 68 (total is correct)
      //
      // First, we'll do some type checking in case change is not of the
      // expected type.
      change = [].concat(change); // force whatever it is to be an array
      // it should be an array of numbers, so let's check
      for (const item of change) {
        if (typeof (change[item]) !== 'number') {
          return 'Error: the function computeChange did not return ' +
            'an array of numbers.';
        }
      }
      if (change.length > this.fraction.length) {
        return 'Error: the function computeChange returned an array ' +
          'longer than the length (' + this.fraction.length + ') of this.fraction.';
      }
      if (change.length < this.fraction.length) {
        return 'Error: the function computeChange returned an array ' +
          'shorter than the length (' + this.fraction.length + ') of this.fraction.';
      }
      let output = '<pre>NUMBER   VALUE\n';
      let sum = 0;
      for (const item of this.sum) {
        sum += change[item] * this.fraction[item];
        const n = change[item].toString();
        const a = this.fraction[item].toString();
        output += rightJustify(n, 4) + rightJustify(a, 9) + '\n';
      }
      output += 'TOTAL this.money: ' + sum + ' (total is ';
      output += (sum === this.money ? 'correct' :
        'incorrect, should be ' + this.money) + ')\n';
      return output;
    }


    function runSolution() {
      parent.console.log('loaded, calling runSolution()\n');
      parent.console.log('answer: ' + document.getElementById('answer').toString());
      document.getElementById('answer').innerHTML = makeChange();
    }
  }

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
    console.log(this.fcount);
  }

  // function clear input
  onClear() {
    this.money = null;
    this.fcount = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

}
