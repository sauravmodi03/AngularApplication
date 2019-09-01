import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { timer } from 'rxjs';
import { Events } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(public events: Events) {
    
  }
  
  ngOnInit(){
    // timer(2000).subscribe(() =>{
    //   // document.getElementById('main-content').style.setProperty("left","0");
    //   document.getElementsByClassName('transition')[0].setAttribute("left","0");
    //   // document.getElementById('main-content').setAttribute("transition-delay","1s");
    // }); 
    this.events.publish("message","0");
  }

  

}
