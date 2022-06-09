import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent implements OnChanges {

  @Input() face;

  @Input() type = 1;

  @Input() small = false;

  @ViewChild('dice') diceEl: ElementRef;

  constructor() {}

  ngOnChanges() {
    this.roll();
  }

  ngAfterViewInit() {
    this.roll();
  }

  roll() {
    console.log(this.face);
    if (this.diceEl) {
      for (let i = 1; i <= 6; i++) {
        this.diceEl.nativeElement.classList.remove('show-' + i);
        if (this.face === i) {
          this.diceEl.nativeElement.classList.add('show-' + i);
        }
      }
    }
  }



}
