import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
  <h2 class="text-success">
  {{name}}
  <input type="text" value="alain" [disabled]="isDisabled">
 </h2>
  class binding
 <h1 [class]="successClass">ALAIN IS RL</h1>

 <h2 [ngClass]="messageClasses">Alain in Angular</h2>
  style binding
 <h3 [style.color]="'orange'">Style Binding</h3>
  <h2 [ngStyle]="titleStyle"> Style Binding</h2>
 <h3 [style.color]="hasError ? 'red' : 'green'">Style Binding</h3>
  Event Binding
 <button (click)="onClick()">Greet</button>
  {{greeting}}
  
  Template Reference Varialbles
  <input #myInput type="text">
  <button (click)="logMessage(myInput.value)">Log</button>
  
  `,
  styles: [`
    .text-success{
      color: green;
    }
    .text-danger{
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class ClassBindingComponent implements OnInit {

  public name = "Alainpogi"
  public isDisabled = true 
  public successClass = "text-success"
  public isSpecial = true
  public hasError = false
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.hasError
  }

  public titleStyle = {
    color: 'blue',
    fontStyle: 'italic'
  }

  constructor() { }
 

  ngOnInit(): void {
  }
  
  public greeting = ""
  onClick = () =>{
    console.log('asdasd');
    this.greeting = "this is alain"
  }

  logMessage = (value) => {
    console.log(value)
  }
}
