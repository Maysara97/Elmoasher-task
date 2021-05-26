import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-course-header',
  templateUrl: './course-header.component.html',
  styleUrls: ['./course-header.component.scss']
})
export class CourseHeaderComponent implements OnInit {

  constructor(
    private router : Router,
    public translate : TranslateService,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  goToCourses(){
    this.translate.use('en');
    localStorage.setItem('currentLang' , 'en');
    this.document.body.classList.remove('rtl')
    this.router.navigate(['home'])
  }

}
