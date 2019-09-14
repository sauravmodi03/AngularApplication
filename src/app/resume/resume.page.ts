import { Component, OnInit } from '@angular/core';
import { DocumentViewerOptions, DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Platform, Events, IonicModule } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.page.html',
  styleUrls: ['./resume.page.scss'],
})
export class ResumePage implements OnInit {

  constructor(private document: DocumentViewer, private file: File, private transfer: FileTransfer,
    private platform: Platform, private fileOpener: FileOpener, public events: Events, private androidPermissions: AndroidPermissions) {
    console.log("Resume Constructor")
  }

  openResumePdf() {
    let filePath = this.file.applicationDirectory + 'www/assets';
    const option: DocumentViewerOptions = {
      title: 'Resume'
    };
    this.file.copyFile(`${filePath}`, 'resume.pdf', this.file.dataDirectory, 'resume.pdf').then(result => {
      this.fileOpener.open(result.nativeURL, 'application.pdf');
    });
  }

  filetransfer = new FileTransferObject();

  downloadResumePdf() {
    let downloadUrl = 'https://firebasestorage.googleapis.com/v0/b/myapp-494ee.appspot.com/o/Resume%2FResume.pdf?alt=media&token=2c3541a4-f24d-436b-b7a8-7bb18714431b';
    let path = this.file.dataDirectory;
    // const transfer = this.transfer.create();
    this.filetransfer.download(downloadUrl, path + '/Download/' + 'Saurav_Modi_CV.pdf', true);
  }

  ngOnInit() {
    this.events.publish("message", "5");
  }

  getPermission() {
    this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
      .then(status => {
        if (status.hasPermission) {
          this.downloadResumePdf();
        }
      });

  }

}
