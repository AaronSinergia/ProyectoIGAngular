import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from './components/SearchBar/searchbar.component';
import { NavBarComponent } from './components/NavBar/navbar.component';
import { BodyImgComponent } from './components/BodyIMG/bodyimg.component';
import { UserStoriesComponent } from './components/UserStories/userstories.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserStoriesComponent , SearchBarComponent, NavBarComponent, BodyImgComponent],
  template: `
  <app-searchbar></app-searchbar>
  <app-userstories></app-userstories>
  <app-bodyimg></app-bodyimg>
  <app-navbar></app-navbar>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'probando';
}
