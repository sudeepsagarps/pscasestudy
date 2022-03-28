import {
  Component,
  HostListener,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.scss'],
})
export class DynamicDivComponent implements OnInit, AfterViewInit {
  divElements = [1, 2, 3, 4, 5];
  count = 1;
  itemHeight: number = 0;
  scrollFrameHeight: number = 0;

  @ViewChild('scrollframe', { static: false }) scrollFrame:
    | ElementRef
    | undefined;
  @ViewChild('itemframe', { static: false }) itemFrame: ElementRef | undefined;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.itemHeight =
      this.itemFrame?.nativeElement.offsetHeight * this.divElements.length;
    this.scrollFrameHeight = this.scrollFrame?.nativeElement.offsetHeight;
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (this.touchedYAxis()) {
      this.divElements = [...this.divElements, this.count++];
    }
  }

  touchedYAxis(): boolean {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
  }

  sayHi(index: number) {
    alert('No. ' + index + ' div clicked');
  }
}
