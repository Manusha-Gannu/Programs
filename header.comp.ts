import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuVisible = false;
    
  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

}
