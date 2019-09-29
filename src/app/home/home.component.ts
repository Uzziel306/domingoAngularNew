import { Component, OnInit } from '@angular/core';
import {  ApiServiceService } from '../services/api-service.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items : any = [];

  constructor(private api : ApiServiceService) { }

  ngOnInit() {
    this.api.getCarts()
    .subscribe((data) => this.items = data)
  }

}
