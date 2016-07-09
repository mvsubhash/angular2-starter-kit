import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1>{{title}}</h1>'
})
export class AppComponent {
	title: string;

	constructor() {
		this.title = 'Welcome to the Angular2 World...!';
	}
}
