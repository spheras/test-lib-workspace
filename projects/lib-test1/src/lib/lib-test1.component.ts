import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'foo-lib-test1',
  template: `
    <p>
      lib-test1 works!
    </p>
  `,
  styles: []
})
export class LibTest1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
