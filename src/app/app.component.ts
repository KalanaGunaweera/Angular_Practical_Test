import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Project';
  // // standalone: true = true;
  // // imports!: [MatButtonModule, MatDividerModule, MatIconModule]
  login(){
    alert('login');
  }
  register(){
    alert('register');
  }
}
