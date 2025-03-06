import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello World';
  imgUrl = "../assets/logo.jpg";
  url = "https://www.bridgelabz.com";
  userName: string = "Aditya";

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz";
  }

  onClick(event: Event): void {
    console.log('BridgeLabz logo clicked!', event);
    window.open(this.url, '_blank'); 
  }
}
