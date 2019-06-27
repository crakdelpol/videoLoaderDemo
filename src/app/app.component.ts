import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ITagModel} from './model/tag.model';
import {NgxSpinnerService} from 'ngx-spinner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  file: any;
  showvideo = false;

  listTags = [
    'tag 1',
    'tag 2',
    'tag 3'
  ];

  listTagSaved: ITagModel[];

  ngOnInit(): void {

  }
  toggleVideo(event: any) {

  }

  playFromThis(tagSaved: ITagModel) {

  }

  onFileChangeEvent(event: Event) {

    const reader = new FileReader();
    // @ts-ignore
    const file = event.target.files[0];
    reader.onloadstart = (_event) => {
      this.showvideo = true;
      this.spinner.show();
    };

    reader.onloadend = (_event) => {

      this.spinner.hide();
    };

    reader.onload = (e) => { // when file has read:


      const blob = new Blob([e.target.result], {
          type: 'video'
        }), // create a blob of buffer

        url = URL.createObjectURL(blob), // create o-URL of blob
        video = document.getElementById('videoPlayer');
        video.setAttribute('src', url);

    };

    reader.readAsArrayBuffer(file); // read file object

  }
}
