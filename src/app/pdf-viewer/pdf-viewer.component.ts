import { Component, OnInit, HostListener } from '@angular/core';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {

  constructor() { }
  pdfSrc: string |  ArrayBuffer = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  page = 1;
  totalPages: number;
  isLoaded = false;

  // tslint:disable-next-line:typedef
  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  // tslint:disable-next-line:typedef
  nextPage() {
    this.page++;
  }

  // tslint:disable-next-line:typedef
  prevPage() {
    this.page--;
  }
  @HostListener('window:keyup', ['$event'])
  // tslint:disable-next-line:typedef
  keyEvent(event: KeyboardEvent) {
    console.log(event);

    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      if (this.page < this.totalPages) {
        this.nextPage();
      }
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      if (this.page > 1) {
        this.prevPage();
      }
    }
  }

  ngOnInit(): void {
  }

}
