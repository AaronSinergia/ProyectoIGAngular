import { Component } from "@angular/core";
import { usersImgCarousel } from "../../utils/usersImgCarousel/usersimgcarousel";

@Component({
    selector: 'app-userstories', 
template: `
<div *ngFor="let imagePath of images">
<img [src]="imagePath" alt="Image" />
</div>
`,
    styleUrls: ['./userstories.component.css'],
    standalone: true, 
})

export class UserStoriesComponent  {
    images: string[] = usersImgCarousel;
 }