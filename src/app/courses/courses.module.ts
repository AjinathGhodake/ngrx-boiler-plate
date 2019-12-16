import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatTabsModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatSlideToggleModule,
  MatDialogModule,
  MatSelectModule,
  MatDatepickerModule
} from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { HomeComponent } from "./home/home.component";
import { CourseComponent } from "./course/course.component";
import { CourseCardListComponent } from "./course-card-list/course-card-list.component";
import { EditCourseDialogComponent } from "./edit-course-dialog/edit-course-dialog.component";
import { HttpClientModule } from "@angular/common/http";
import { CoursesService } from "./service/courses.service";
export const coursesRoutes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: ":courseUrl",
    component: CourseComponent
  }
];
@NgModule({
  declarations: [
    HomeComponent,
    CourseComponent,
    CourseCardListComponent,
    EditCourseDialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    ReactiveFormsModule,
    RouterModule.forChild(coursesRoutes)
  ],
  entryComponents: [EditCourseDialogComponent],
  providers: [CoursesService]
})
export class CoursesModule {}
