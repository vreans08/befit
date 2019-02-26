import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../shared/service/questions.service';

@Component({
  selector: 'app-addquestions',
  templateUrl: './addquestions.component.html',
  styleUrls: ['./addquestions.component.scss']
})
export class AddquestionsComponent implements OnInit {
  title = 'Ngx-tree-dnd example';
  currentEvent: string = 'start do something';
  questions:Array<any> = [];
  myTree:any ;
  constructor(public  questionService:QuestionsService) { }

  ngOnInit() {
    this.questionService.getQuestions().subscribe(cons => {
      console.log("Questions ",cons);
      this.myTree = JSON.parse(cons[0]["questions"]);
    })

  }
  config = {
    showActionButtons: true,
    showAddButtons: true,
    showRenameButtons: true,
    showDeleteButtons: true,
    showRootActionButtons: true, // set false to hide root action buttons.
    enableExpandButtons: true,
    enableDragging: true,
    rootTitle: 'Questions',
    validationText: 'Error',
    minCharacterLength: 0,
    setItemsAsLinks: false,
    setFontSize: 20,
    setIconSize: 13
  };

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

  save(){
      this.questionService.uploadQuestions({
        questionID : "1",
        questions: JSON.stringify(this.myTree)
      }).subscribe(upload => {
        console.log(upload);
      })
  }

}
