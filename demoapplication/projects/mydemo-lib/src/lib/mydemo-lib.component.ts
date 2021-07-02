import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-mydemo-lib',
  template: `
    <p>
      mydemo-lib works!
    </p>
  `,
  styles: [
  ]
})
export class MydemoLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
