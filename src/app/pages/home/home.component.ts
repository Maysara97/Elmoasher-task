import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentLang:any;
  constructor(
    public translate: TranslateService,
    @Inject(DOCUMENT) private document: Document) {

   }

  ngOnInit(): void {
    this.currentLang = localStorage.getItem('currentLang') || this.translate.defaultLang;
    this.translate.use(this.currentLang);

    if(this.translate.currentLang == 'ar'){
      this.document.body.classList.add('rtl') 
    } else { 
      this.document.body.classList.remove('rtl')
    }
  }


   openPage(pageName:any,elmnt:any,color:any) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";

    document.getElementById(elmnt).style.backgroundColor = color
    elmnt.style.backgroundColor = color;

    document.getElementById("defaultOpen").click();
  }

}
