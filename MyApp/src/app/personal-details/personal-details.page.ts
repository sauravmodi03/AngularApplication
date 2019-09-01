import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.page.html',
  styleUrls: ['./personal-details.page.scss'],
})
export class PersonalDetailsPage implements OnInit {

  info = [{label:"Name :",value:"Saurav Modi"},
  {label:"Gender :",value:"Male"},
  {label:"Birthday :",value:"09-Nov-1995"},
  {label:"Occupation :",value:"Software Engineer"},
  {label:"Email :",value:"sauravmodi03@gmail.com"},
  {label:"Contact :",value:"+91-8087559030"},
  {label:"Address :",value:"A1-803, Parkwayz, Wakad, Pune-411057"}  
  ]
  constructor(public events:Events) { }

  ngOnInit() {
    this.events.publish("message","2");
  }

}
