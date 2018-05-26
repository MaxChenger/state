import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PetTag } from '../state-manage/pet-tag.model';

@Component({
  selector: 'app-tag-preview',
  templateUrl: './tag-preview.component.html',
  styleUrls: ['./tag-preview.component.css']
})
export class TagPreviewComponent implements OnChanges  {
  @Input() petTag: PetTag;
  imgSrc = '';
  tagClipText: string;
  gemsText: string;
  constructor() { }
  ngOnChanges() {
    console.log(this.petTag);
    this.imgSrc = `/assets/images/${this.petTag.shape}.svg`;
    this.tagClipText = this.boolToText(this.petTag.clip);
    this.gemsText = this.boolToText(this.petTag.gems);
  }
  private boolToText(bool: boolean) {
    return bool ? 'Yes' : 'No';
  }
}
