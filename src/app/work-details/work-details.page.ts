import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.page.html',
  styleUrls: ['./work-details.page.scss'],
})
export class WorkDetailsPage implements OnInit {

  startDate = new Date("2016-11-14");
  experience : string;
  
  constructor(public events:Events) {    
    var m1 = this.monthDiff(this.startDate,new Date)%12;
    var m2 = (this.monthDiff(this.startDate,new Date) - m1 )/12;
    this.experience = m2.toString()+"."+m1.toString();
    console.log(this.experience);
   }

   monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}
  
  

  ngOnInit() {
    this.events.publish("message","3");
  }

}
