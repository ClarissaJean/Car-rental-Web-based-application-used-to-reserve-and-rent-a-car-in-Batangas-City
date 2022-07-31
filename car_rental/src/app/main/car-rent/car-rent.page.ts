import { Component, OnInit } from '@angular/core';
import { AnySrvRecord } from 'dns';

@Component({
  selector: 'app-car-rent',
  templateUrl: './car-rent.page.html',
  styleUrls: ['./car-rent.page.scss'],
})
export class CarRentPage implements OnInit {

  price:any
  count:any=1;

  total:any;
  constructor() { }

  ngOnInit() {

    this.price=200
    this.total=this.price;
  }


  increment(){
    this.count++;
    this.total=this.total+this.price;
  }

  decrement(){
    if(this.count<1){
      this.count=1;

      this.ngOnInit()
    }else{
      this.count--;
      this.total=this.total-this.price;
    }
    

    
  }





  

}
