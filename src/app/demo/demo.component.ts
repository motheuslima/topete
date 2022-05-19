import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  face1 = 1;
  face2 = 1;

  leak = 0;

  outcomes = [
    [[1,1]],
    [[1,2], [2,1]],
    [[1,3],[2,2],[3,1]],
    [[1,4],[2,3],[3,2],[4,1]],
    [[1,5],[2,4],[3,3],[4,2],[5,1]],
    [[1,6],[2,5],[3,4],[4,3],[5,2],[6,1]],
    [[2,6],[3,5],[4,4],[5,3],[6,2]],
    [[3,6],[4,5],[5,4],[6,3]],
    [[4,6],[5,5],[6,4]],
    [[5,6],[6,5]],
    [[6,6]]
  ]

  constructor() { }

  ngOnInit(): void {
  }

  roll() {
    this.face1 = Math.floor((Math.random() * 6) + 1);
    this.face2 = Math.floor((Math.random() * 6) + 1);

    this.leak = this.face1 + this.face2;
    console.log(this.face1);
  }

}
