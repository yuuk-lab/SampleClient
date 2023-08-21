import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoList';
  todoForm = new FormControl("",[]);


  constructor() {

  }

    ngOnInit() {
      this.todoForm.setValue("これは初期値です");
      console.log("todoForm",this.todoForm);

    }
    

}


