import { Component } from '@angular/core';

@Component({
  selector: 'app-home-work',
  templateUrl: './home-work.component.html',
  styleUrls: ['./home-work.component.css']
})
export class HomeWorkComponent {
set_class = false
user_name = " ajmal"
btn_click(event:any){
  console.log("blll")
}

}
