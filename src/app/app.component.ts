import { Component } from '@angular/core';

import { Platform, Events } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home',
      color:'secondary'
    },
    {
      title: 'Social Connections',
      url: '/social-media',
      icon: 'people',
      color:''
    },
    {
      title: 'Personal Info',
      url: '/personal-details',
      icon: 'person',
      color:''
    },
    {
      title: 'Work Info',
      url: '/work-details',
      icon: 'briefcase',
      color:''
    },
    {
      title: 'Skills',
      url: '/skills',
      icon: 'globe',
      color:''
    },
    {
      title: 'Resume',
      url: '/resume',
      icon: 'print',
      color:''
    },
    {
      title: 'Contact',
      url: '/contact',
      icon: 'contact',
      color:''
    }
  ];

  constructor(
    private platform: Platform,    
    private statusBar: StatusBar,
    public events: Events
  ) {
    this.initializeApp();
    this.events.subscribe('message', (data) =>{
      this.changeMenu(data); // 👋 Hello from page1!
    });
  }

  showSplash = true;

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(false);
      this.statusBar.styleLightContent();      
      timer(3000).subscribe(() =>{
        this.showSplash = false;
      })
    });
  }

  changeMenu(data){
    for(let i in this.appPages){
      this.appPages[i].color = "";
    }
    this.appPages[data].color = "secondary";
  }
}
