import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(
    private router : Router,
    public translate : TranslateService,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  showCourse(){
    this.translate.use('ar');
    localStorage.setItem('currentLang' , 'ar');
    this.document.body.classList.add('rtl')
    this.router.navigate(['course-view']);
  }

}
