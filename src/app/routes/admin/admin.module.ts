import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [AdminhomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    CommonModule
  ]
})
export class AdminModule { }
