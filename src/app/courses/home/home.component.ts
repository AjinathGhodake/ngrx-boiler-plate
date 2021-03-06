import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Course, compareCourses } from "../model/course";
import { MatDialog } from "@angular/material";
import { map, shareReplay } from "rxjs/operators";
import { defaultDialogConfig } from "../shared/default-dialog-config";
import { EditCourseDialogComponent } from "../edit-course-dialog/edit-course-dialog.component";
import { CoursesService } from "../service/courses.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  promoTotal$: Observable<number>;

  loading$: Observable<boolean>;

  beginnerCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;

  constructor(
    private dialog: MatDialog,
    private coursesHttpService: CoursesService
  ) {}

  ngOnInit() {
    this.reload();
  }

  reload() {
    const courses$ = this.coursesHttpService.findAllCourses().pipe(
      map(courses => courses.sort(compareCourses)),
      shareReplay()
    );

    this.loading$ = courses$.pipe(map(courses => !!courses));

    this.beginnerCourses$ = courses$.pipe(
      map(courses => courses.filter(course => course.category == "BEGINNER"))
    );

    this.advancedCourses$ = courses$.pipe(
      map(courses => courses.filter(course => course.category == "ADVANCED"))
    );

    this.promoTotal$ = courses$.pipe(
      map(courses => courses.filter(course => course.promo).length)
    );
  }

  onAddCourse() {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: "Create Course",
      mode: "create"
    };

    this.dialog.open(EditCourseDialogComponent, dialogConfig);
  }
}
