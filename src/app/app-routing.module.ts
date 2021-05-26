import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseViewComponent } from './pages/course-view/course-view.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:''            , component:HomeComponent},
  {path:'home'        , component:HomeComponent},
  {path:'course-view' , component:CourseViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
