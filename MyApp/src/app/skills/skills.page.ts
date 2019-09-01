import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.scss'],
})
export class SkillsPage implements OnInit {

  backendShow = true;
  frontenShow = false;
  toolsShow = false;
  databseShow = false;
  othersShow = false;

  
  constructor(public events:Events) { }

  skills = [{label:"Backend Frameworks",name:"backend",enable:true,skills:["Java", "Python", "HTML", "CSS", "Bootstrap", "AngularJS", "Angualar 7", 
  "JavaScript", "Spring Boot", "RestFull Web Services"]},
  {label:"Frontend styling",name:"frontend",enable:false,skills:["HTML", "CSS", "Bootstrap", "AngularJS", "Angualar 7", 
  "JavaScript"]},
  {label:"Tools",name:"tools",enable:false,skills:["Intellij Idea","Pycharm","Visual Studio Code","SQL Navigator"]},
  {label:"Database",name:"database",enable:false,skills:["Oracle 11g", "PL/SQL"]},
  {label:"Others",name:"others",enable:false,skills:["Google Chrome Extension"]}
  ] 

  showhide(value){
    if(this.skills[value].enable){
      this.skills[value].enable = !this.skills[value].enable;  
    } else{
      for(var i in this.skills){
        this.skills[i].enable = false;
      }
      this.skills[value].enable = !this.skills[value].enable;
    }    
  }

  ngOnInit() {
    this.events.publish("message","4");
  }


}
