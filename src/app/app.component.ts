import { Component } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { GithubService } from './services/github.service';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [ProfileComponent, NavbarComponent],
  providers: [GithubService]
})
export class AppComponent {
  
}
