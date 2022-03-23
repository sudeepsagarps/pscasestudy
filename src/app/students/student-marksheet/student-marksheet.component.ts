import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  StudentService,
  Students,
  SortDirection,
} from '../service/student.service';

@Component({
  selector: 'app-student-marksheet',
  templateUrl: './student-marksheet.component.html',
  styleUrls: ['./student-marksheet.component.scss'],
})
export class StudentMarksheetComponent implements OnInit, OnDestroy {
  studentData = this.studentService.getStudentDetails();
  headers: string[] = [];
  headerSubscription!: Subscription;
  studentDetails!: Array<Students>;
  sortableStudentDetail!: Array<Students>;
  sortableColumn: any;
  sortDirection: SortDirection = SortDirection.asc;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getHeaderAndData();
    this.addSortingClass();
  }

  getHeaderAndData(): void {
    this.headerSubscription = this.studentData.subscribe((data) => {
      this.headers = Object.keys(data[0].columnDefs[0]);
      this.sortableColumn = data[0].columnDefs[0];
      this.studentDetails = data[1].studentsData;
      this.sortableStudentDetail = [...this.studentDetails];
    });
  }

  addSortingClass() {}

  sortColumn(property: string, direction: SortDirection): void {
    this.setSortColumnActive(property);
    switch (direction) {
      case SortDirection.asc:
        this.sortableStudentDetail.sort((a: any, b: any) =>
          a[property].localeCompare(b[property], undefined, {
            numeric: true,
            sensitivity: 'base',
          })
        );
        this.sortableColumn[property].dir = SortDirection.asc;
        this.sortDirection = SortDirection.desc;
        break;
      case SortDirection.desc:
        this.sortableStudentDetail.sort((a: any, b: any) =>
          b[property].localeCompare(a[property], undefined, {
            numeric: true,
            sensitivity: 'base',
          })
        );
        this.sortableColumn[property].dir = SortDirection.desc;
        this.sortDirection = SortDirection.default;
        break;
      default:
        this.sortableStudentDetail = [...this.studentDetails]; // default array
        this.sortableColumn[property].dir = SortDirection.default;
        this.sortDirection = SortDirection.asc;
        break;
    }
  }

  setSortColumnActive(property: string): void {
    // reset ealier sort before applying sorting
    this.headers.forEach((res) => {
      this.sortableColumn[res].active = false;
      this.sortableColumn[res].dir = SortDirection.default
    });
    this.sortableColumn[property].active = true;
  }

  ngOnDestroy(): void {
    this.headerSubscription?.unsubscribe();
  }
}
