import { Component } from '@angular/core';
import { Movie } from './movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies';

  watched = [
    new Movie("Jumanji", "comedy", 2019),
    new Movie("Rise of Skywalker","action", 2019),
    new Movie("IT: Chapter II", "horror", 2019)
  ]
  toWatch = [
    new Movie("Grudge", "horror", 2020),
    new Movie("Turning","horror", 2020),
    new Movie("Parasite", "comedy/thriller", 2019),
    new Movie("United Skates", "documentary", 2019)

  ]
  
}


