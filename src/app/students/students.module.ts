import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentMarksheetComponent } from './student-marksheet/student-marksheet.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';




@NgModule({
  declarations: [
    StudentMarksheetComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class StudentsModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faSort, faSortUp, faSortDown);
  }
}
