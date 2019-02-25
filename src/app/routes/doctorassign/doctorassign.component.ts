import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-doctorassign',
  templateUrl: './doctorassign.component.html',
  styleUrls: ['./doctorassign.component.scss']
})
export class DoctorassignComponent implements OnInit {
  public data:any;
  selectedData:any;
  filterText:any;
  constructor(private dialogRef: MatDialogRef<DoctorassignComponent>, private _http: HttpClient, public snackBar: MatSnackBar
    , @Inject(MAT_DIALOG_DATA) data) {
      this.data = data;
     }

  ngOnInit() {
  }
assign(){
  console.log(this.selectedData);
  this.dialogRef.close(this.selectedData);
}
radioChange(data){
  this.selectedData = data;
}
}
