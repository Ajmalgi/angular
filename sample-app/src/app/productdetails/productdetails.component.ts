import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit{

  constructor(private activatedRoute : ActivatedRoute){}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id')
    console.log(id)
  }
}
