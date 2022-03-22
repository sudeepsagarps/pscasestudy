import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentMarksheetComponent } from './student-marksheet/student-marksheet.component';

const routes: Routes = [
  {
    path: '',
    component: StudentMarksheetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
