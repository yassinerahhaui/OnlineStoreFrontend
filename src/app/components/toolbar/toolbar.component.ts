import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() public sideNavToggle = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSideNaveToggle() {
    this.sideNavToggle.emit();
  }
}
