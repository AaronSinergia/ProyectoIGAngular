import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userstories',
  templateUrl: './userstories.component.html',
  styleUrls: ['./userstories.component.scss'],
  standalone: true,
})
// export class UserStoriesComponent { }
export class UserStoriesComponent implements OnInit {
  usersImgCarousel: string[] = [
    '/assets/usersImgs/image1.jpg',
    '/assets/usersImgs/image2.jpg',
    '/assets/usersImgs/image3.jpg',
    '/assets/usersImgs/image4.jpg',
    '/assets/usersImgs/image5.jpg'
  ];
  currentIndex = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.moveCarousel();
    }, 3000); // Cambia la imagen cada 3 segundos
  }

  moveCarousel(): void {
    if (this.currentIndex < this.usersImgCarousel.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }
}
