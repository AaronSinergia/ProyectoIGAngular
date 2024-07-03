import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { SearchBarComponent } from './app/components/SearchBar/searchbar.component';
import { NavBarComponent } from './app/components/NavBar/navbar.component';
import { BodyImgComponent } from './app/components/BodyIMG/bodyimg.component';
import { UserStoriesComponent } from './app/components/UserStories/userstories.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    NavBarComponent,
    BodyImgComponent,
    UserStoriesComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }