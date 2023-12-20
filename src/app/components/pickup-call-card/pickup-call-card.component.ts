import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
})
export class PickupCallCardComponent  implements OnInit {

  @Input () hasHeader:boolean=false;
  @Input () hasFooter:boolean=true;


  @Input () status: string;
  @Input () upDateAt: string;
  @Input () createdAt: string;
  @Input () notes: string;



  constructor() {
    this.status='';
    this.upDateAt='';
    this.createdAt='';
    this.notes='';
}

  ngOnInit() {}

}
