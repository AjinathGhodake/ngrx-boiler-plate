import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "../login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import {
  MatCardModule,
  MatInputModule,
  MatButtonModule
} from "@angular/material";
import { RouterModule } from "@angular/router";
import { AuthService } from "./auth.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild([{ path: "", component: LoginComponent }])
  ]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [AuthService]
    };
  }
}
