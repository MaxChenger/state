import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag-text',
  templateUrl: './tag-text.component.html',
  styleUrls: ['./tag-text.component.css']
})
export class TagTextComponent implements OnInit {
  tagTextInput = '';
  fontType = 'snas-serif';
  @Output() selectFontEvent = new EventEmitter();
  @Output() addTextEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
 selectFont(fontType: string) {
    this.selectFontEvent.emit(fontType);
 }
 addText(tagTextInput: string) {
    this.addTextEvent.emit(tagTextInput);
 }
}
