import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Hello Word';
  imgUrl = "../assets/logo.jpg";
  url = "https://www.bridgelabz.com";

ngOnInit(): void{
  this.title = "Hello from BridgeLabz"
  }
  onClick(event: Event): void{
    console.log('BridgeLabz logo clicked!', event);
    window.open(this.url, '_blank'); 
    
  }
}
