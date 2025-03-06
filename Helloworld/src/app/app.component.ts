import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Hello Word';
  imgUrl = "../assets/logo.jpg"

ngOnInit(): void{
  this.title = "Hello from BridgeLabz"
  }
}
