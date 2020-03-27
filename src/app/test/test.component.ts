import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
      <h2>
       {{name}}
       <input type="text" value="alain" [disabled]="isDisabled">
      </h2>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Alainpogi"
  public isDisabled = true 
  constructor() { }

  ngOnInit(): void {
  }

}
