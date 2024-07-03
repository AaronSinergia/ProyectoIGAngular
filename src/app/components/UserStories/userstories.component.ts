import { Component } from '@angular/core';
import { userPhotos } from '../../utils/arrUserPhotos/userPhotos';

@Component({
  selector: 'app-userstories',
  templateUrl: './userstories.component.html',
  styleUrls: ['./userstories.component.scss'],
  standalone: true
})
export class UserStoriesComponent {
  userPhotos = userPhotos;
}
