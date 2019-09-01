import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { Events } from '@ionic/angular';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(private emailComposer: EmailComposer, private androidPermissions: AndroidPermissions, private router: Router,public events:Events) {
    console.log("Email ")
  }

  emailSubject: string;
  emailBody: string;

  sendEmail() {
    // this.emailComposer.isAvailable().then((available: boolean) => {
    //   if (available) {
    //Now we know we can send
    let email = {
      to: 'sauravmodi03@gmail.com',
      cc: '',
      bcc: '',
      attachments: [],
      subject: this.emailSubject,
      body: this.emailBody,
      isHtml: true
    }

    if (this.emailSubject != undefined && this.emailSubject != ""
      && this.emailBody != undefined && this.emailBody != "") {
      this.emailComposer.open(email);
      timer(2000).subscribe(() => {
        this.router.navigate(['/home']);
        this.emailSubject = "";
        this.emailBody = "";
      });
    }

  }

  ngOnInit() {
    this.events.publish("message","6");
  }

}
