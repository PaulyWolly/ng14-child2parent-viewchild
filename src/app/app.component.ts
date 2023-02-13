import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Child1Component } from './child1/child1.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit {
  @ViewChild(Child1Component) child1: Child1Component;

  name = 'Parent';
  msgFromChild1: any;
  currentMsgToChild1 = '';
  currentMsgToParent = '';

  ngAfterViewInit() {
    // this.currentMsgToParent = this.child1.currentMsgToParent;
    this.msgFromChild1 = this.child1.msgFromChild1;
  }

}
