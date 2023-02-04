import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-app';
  student_data = [
    {
      'id':1,
      'student_name':'ajmal',
      'age':22,
      'gender':'male',
      'email':'aj@gmail.com'
    },
    {
      'id':2,
      'student_name':'misbah',
      'age':23,
      'gender':'male',
      'email':'misbah@gmail.com'

    }
  ]
  show_table = true
  color = 'black'
  courses = []
  disable_button = false

  cs = 2

}