import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes=[
  {path:"users",component:GithubComponent},
  {path:"about",component:AboutComponent}
]

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { GithubComponent } from './github/github.component';
import { HighlightDirective } from './highlight.directive';
import { AboutComponent } from './about/about.component';
import { ChangePipe } from './change.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    GithubComponent,
    HighlightDirective,
    AboutComponent,
    ChangePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
