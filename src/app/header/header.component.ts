import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  popoverTitle = "Popover title";
  popoverContent = "And here's some amazing content. It's very engaging. Right?";
}
