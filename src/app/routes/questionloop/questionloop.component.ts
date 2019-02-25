import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-questionloop',
  templateUrl: './questionloop.component.html',
  styleUrls: ['./questionloop.component.scss']
})
export class QuestionloopComponent implements OnInit {
@Input() children:any;
  constructor() { }

  ngOnInit() {
  }

}
