import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Course } from "../model/course";
import { MatDialog } from "@angular/material";
import { defaultDialogConfig } from "../shared/default-dialog-config";
import { EditCourseDialogComponent } from "../edit-course-dialog/edit-course-dialog.component";

@Component({
  selector: "app-course-card-list",
  templateUrl: "./course-card-list.component.html",
  styleUrls: ["./course-card-list.component.scss"]
})
export class CourseCardListComponent implements OnInit {
  @Input()
  courses: Course[];

  @Output()
  courseChanged = new EventEmitter();

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  editCourse(course: Course) {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: "Edit Course",
      course,
      mode: "update"
    };

    this.dialog
      .open(EditCourseDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => this.courseChanged.emit());
  }

  onDeleteCourse(course: Course) {}
}
