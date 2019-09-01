import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.page.html',
  styleUrls: ['./social-media.page.scss'],
})
export class SocialMediaPage implements OnInit {

  constructor(public events:Events) { 
    
  }

  ngOnInit() {
    console.log("fdfgsdf ");
    this.events.publish("message","1");
  }

}
