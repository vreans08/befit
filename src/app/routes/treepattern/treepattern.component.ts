import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-treepattern',
  templateUrl: './treepattern.component.html',
  styleUrls: ['./treepattern.component.scss']
})
export class TreepatternComponent implements OnInit {
  title = 'Old';
  currentEvent: string = 'start do something';
  questions:Array<any> = [];
  @Input() myTreeData:any;
  constructor() { }

  ngOnInit() {
      }
  config = {
    showActionButtons: false,
    showAddButtons: false,
    showRenameButtons: false,
    showDeleteButtons: false,
    showRootActionButtons: false, // set false to hide root action buttons.
    enableExpandButtons: false,
    enableDragging: false,
    rootTitle: 'Visit Questions',
    validationText: 'Error',
    minCharacterLength: 0,
    setItemsAsLinks: false,
    setFontSize: 20,
    setIconSize: 13
  };

}
