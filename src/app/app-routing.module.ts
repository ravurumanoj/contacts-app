import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ContactformComponent } from './contactform/contactform.component';
const routes: Routes = [
  {path: '',pathMatch: "full",redirectTo: "/signin"}, 
  {path:"signin",component:SigninComponent},
  {path:"signup",component:SignupComponent},
  {path:"contactform",component:ContactformComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
