import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "../model/course";
import { Lesson } from "../model/lesson";
import { CoursesService } from "../service/courses.service";
import { ActivatedRoute } from "@angular/router";
import { concatMap, tap } from "rxjs/operators";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.scss"]
})
export class CourseComponent implements OnInit {
  course$: Observable<Course>;

  lessons$: Observable<Lesson[]>;

  displayedColumns = ["seqNo", "description", "duration"];

  nextPage = 0;

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const courseUrl = this.route.snapshot.paramMap.get("courseUrl");

    this.course$ = this.coursesService.findCourseByUrl(courseUrl);

    this.lessons$ = this.course$.pipe(
      concatMap(course => this.coursesService.findLessons(course.id)),
      tap(console.log)
    );
  }

  loadLessonsPage(course: Course) {}
}
