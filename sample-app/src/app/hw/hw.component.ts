import { Component } from '@angular/core';

@Component({
  selector: 'app-hw',
  templateUrl: './hw.component.html',
  styleUrls: ['./hw.component.css']
})
export class HwComponent {

  student = [
    {
      'id':11,
      'name':'burique',
      'email':'burique@gmail.com',
      'phone':9072827961,
    },
    {
      'id':12,
      'name':'burique',
      'email':'ajmal@gmail.com',
      'phone':9072827972,
    }
  ]
  table_show = true
  color = 'red'
  course = ['php','python','angular']
  button_disable = true
  div_color = 'blue'
  div_fontsize = '20px'
  div_fontfamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
  div_fontweight ='500'
}
