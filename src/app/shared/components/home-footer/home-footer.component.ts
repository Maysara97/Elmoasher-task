import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.scss']
})
export class HomeFooterComponent implements OnInit {

  languague = "en"

  constructor(
    public translate : TranslateService,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  changeLang(event){
    console.log(this.languague)
      this.translate.use(this.languague);
      localStorage.setItem('currentLang' , this.languague);
      if(this.languague == 'en'){
        this.document.body.classList.remove('rtl');
      } else {
         this.document.body.classList.add('rtl')
        }
  }

}
