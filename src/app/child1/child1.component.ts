import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: [ './child1.component.css' ]
})

export class Child1Component {
  name = 'Child 1';
  @Input() msgFromParent1: any[];

  currentMsgToParent = '';
  msgFromChild1 = []

  msgToParent() {
    this.msgFromChild1.push(this.currentMsgToParent);
  }
}
