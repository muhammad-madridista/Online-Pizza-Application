import { Component } from '@angular/core';

@Component({
  selector: 'date',
  template: '<h1> Date : {{ d }} </h1>'
 
})
export class DateComponent {
  d= new Date();
}
