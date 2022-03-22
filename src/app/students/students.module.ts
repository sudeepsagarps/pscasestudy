import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentMarksheetComponent } from './student-marksheet/student-marksheet.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentMarksheetComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule
  ]
})
export class StudentsModule { }
