import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HttpClient, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeHeaderComponent } from './shared/components/home-header/home-header.component';

import {ButtonModule} from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CheckboxModule } from 'primeng/checkbox';
import { FilteComponent } from './pages/home/filte/filte.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { CourseCardComponent } from './shared/components/course-card/course-card.component';
import { CoursesComponent } from './pages/home/courses/courses.component';
import { HomeFooterComponent } from './shared/components/home-footer/home-footer.component';
import { CourseViewComponent } from './pages/course-view/course-view.component';
import { CourseHeaderComponent } from './shared/components/course-header/course-header.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslatePipe, TranslateService, TranslateStore } from '@ngx-translate/core';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeHeaderComponent,
    FilteComponent,
    CourseCardComponent,
    CoursesComponent,
    HomeFooterComponent,
    CourseViewComponent,
    CourseHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    PanelModule,
    CheckboxModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PanelMenuModule,
    TabViewModule,
    TranslateModule.forRoot({
      defaultLanguage:'en',
      loader:{
        provide:TranslateLoader,
        useFactory:createTranslateLoader,
        deps:[HttpClient]
      },
      isolate: false
    }
    ),
    AppRoutingModule
  ],
  providers: [TranslateService , TranslatePipe , TranslateStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
