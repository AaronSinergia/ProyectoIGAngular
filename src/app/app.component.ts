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
  templateUrl: "./app.component.html",
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App Principal Component';
}