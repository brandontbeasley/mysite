import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {  component: ResumeComponent, path: 'resume' },
      {  component: HomeComponent, path: 'home' },
      {  path: '**', pathMatch: 'full', redirectTo: 'home' }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
