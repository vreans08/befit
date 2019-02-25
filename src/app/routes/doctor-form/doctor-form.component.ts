import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.scss']
})
export class DoctorFormComponent implements OnInit {
  title = 'Ngx-tree-dnd example';
  currentEvent: string = 'start do something';
  questions:Array<any> = [];
  constructor() { }

  ngOnInit() {

  }
  config = {
    showActionButtons: true,
    showAddButtons: true,
    showRenameButtons: true,
    showDeleteButtons: true,
    showRootActionButtons: true, // set false to hide root action buttons.
    enableExpandButtons: true,
    enableDragging: false,
    rootTitle: 'Questions',
    validationText: 'Error',
    minCharacterLength: 0,
    setItemsAsLinks: false,
    setFontSize: 20,
    setIconSize: 13
  };
  myTree = [{"name":"How old are you ?","id":1,"options":{"href":"https://github.com/Zicrael/ngx-tree-dnd","hidden":false,"hideChildrens":false,"position":1,"draggable":true,"edit":false,"showActionButtons":true,"currentlyDragging":false,"destenationTop":false,"destenationBottom":false,"disabled":false,"showExpandButton":true,"showDeleteButton":true,"showDropChildZone":false},"childrens":[{"id":201931550604519170,"name":"24","options":{"href":"#","hidden":false,"hideChildrens":false,"position":1,"draggable":true,"edit":true,"showActionButtons":true,"currentlyDragging":false,"destenationTop":false,"destenationBottom":false,"disabled":false,"showExpandButton":true,"showDeleteButton":true},"childrens":[]}]},{"id":201931550603408320,"name":"Do you have Headache ?","options":{"href":"#","hidden":false,"hideChildrens":false,"position":1,"draggable":true,"edit":false,"showActionButtons":true,"currentlyDragging":false,"destenationTop":false,"destenationBottom":false,"disabled":false,"showExpandButton":true,"showDeleteButton":true,"showDropChildZone":false},"childrens":[{"id":201931550603448260,"name":"Yes","options":{"href":"#","hidden":false,"hideChildrens":false,"position":1,"draggable":true,"edit":false,"showActionButtons":true,"currentlyDragging":false,"destenationTop":false,"destenationBottom":false,"disabled":false,"showExpandButton":true,"showDeleteButton":true,"showDropChildZone":false},"childrens":[{"id":201931550603462560,"name":"How frequently do you have headache ?","options":{"href":"#","hidden":false,"hideChildrens":false,"position":1,"draggable":true,"edit":false,"showActionButtons":true,"currentlyDragging":false,"destenationTop":false,"destenationBottom":false,"disabled":false,"showExpandButton":true,"showDeleteButton":true},"childrens":[{"id":201931550604511300,"name":null,"options":{"href":"#","hidden":false,"hideChildrens":false,"position":1,"draggable":true,"edit":true,"showActionButtons":true,"currentlyDragging":false,"destenationTop":false,"destenationBottom":false,"disabled":false,"showExpandButton":true,"showDeleteButton":true},"childrens":[]}]},{"id":201931550603514880,"name":"When is the last time you had headache ?","options":{"href":"#","hidden":false,"hideChildrens":false,"position":2,"draggable":true,"edit":false,"showActionButtons":true,"currentlyDragging":false,"destenationTop":false,"destenationBottom":false,"disabled":false,"showExpandButton":true,"showDeleteButton":true,"showDropChildZone":false},"childrens":[{"id":201931550604512260,"name":null,"options":{"href":"#","hidden":false,"hideChildrens":false,"position":1,"draggable":true,"edit":true,"showActionButtons":true,"currentlyDragging":false,"destenationTop":false,"destenationBottom":false,"disabled":false,"showExpandButton":true,"showDeleteButton":true},"childrens":[]}]},{"id":201931550603534720,"name":"How are you feeling now ?","options":{"href":"#","hidden":false,"hideChildrens":false,"position":3,"draggable":true,"edit":false,"showActionButtons":true,"currentlyDragging":false,"destenationTop":false,"destenationBottom":false,"disabled":false,"showExpandButton":true,"showDeleteButton":true,"showDropChildZone":false},"childrens":[{"id":201931550604515230,"name":null,"options":{"href":"#","hidden":false,"hideChildrens":false,"position":1,"draggable":true,"edit":true,"showActionButtons":true,"currentlyDragging":false,"destenationTop":false,"destenationBottom":false,"disabled":false,"showExpandButton":true,"showDeleteButton":true},"childrens":[]}]}]},{"id":201931550603453540,"name":"No","options":{"href":"#","hidden":false,"hideChildrens":false,"position":2,"draggable":true,"edit":false,"showActionButtons":true,"currentlyDragging":false,"destenationTop":false,"destenationBottom":false,"disabled":false,"showExpandButton":true,"showDeleteButton":true,"showDropChildZone":false},"childrens":[]}]},{"id":201931550603485600,"name":"Do you have vomiting ? ","options":{"href":"#","hidden":false,"hideChildrens":false,"position":1,"draggable":true,"edit":false,"showActionButtons":true,"currentlyDragging":false,"destenationTop":false,"destenationBottom":false,"disabled":false,"showExpandButton":true,"showDeleteButton":true,"showDropChildZone":false},"childrens":[{"id":201931550604521920,"name":null,"options":{"href":"#","hidden":false,"hideChildrens":false,"position":1,"draggable":true,"edit":true,"showActionButtons":true,"currentlyDragging":false,"destenationTop":false,"destenationBottom":false,"disabled":false,"showExpandButton":true,"showDeleteButton":true},"childrens":[]}]}]

  onDragStart(event) {
    this.currentEvent = ' on drag start';
  }
  onDrop(event) {
    this.currentEvent = 'on drop';
  }
  onAllowDrop(event) {
    this.currentEvent = 'on allow drop';
  }
  onDragEnter(event) {
    this.currentEvent = 'on drag enter';
  }
  onDragLeave(event) {
    this.currentEvent = 'on drag leave';
  }
  onAddItem(event) {
    this.currentEvent = 'on add item';
    console.log(this.myTree);
    sessionStorage.setItem('mytree', JSON.stringify(this.myTree));
  }
  onStartRenameItem(event) {
    this.currentEvent = 'on start edit item';
  }
  onFinishRenameItem(event) {
    this.currentEvent = 'on finish edit item';
  }
  onStartDeleteItem(event) {
    console.log('start delete');
    this.currentEvent = 'on start delete item';
  }
  onFinishDeleteItem(event) {
    console.log('finish delete');
    this.currentEvent = 'on finish delete item';
  }
  onCancelDeleteItem(event) {
    console.log('cancel delete');
    this.currentEvent = 'on cancel delete item';
  }

}
