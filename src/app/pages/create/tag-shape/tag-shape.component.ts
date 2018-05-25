import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag-shape',
  templateUrl: './tag-shape.component.html',
  styleUrls: ['./tag-shape.component.css']
})
export class TagShapeComponent implements OnInit {
  tagShape: string;
  @Output() selectShapeEvent = new EventEmitter();
  constructor() { }

  selectShape(shape: string) {
    console.log(this.tagShape);
    this.selectShapeEvent.emit(shape);
  }
  ngOnInit() {
  }

}
