import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { MovieService } from '../movie/movie.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { IMovie } from '../shared/interfaces/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  get isLogged() { return this.userService.isLogged; }
  movies: Observable<IMovie[] | IMovie> = this.movieService.loadMovie(); 

  constructor(private userService: UserService, private movieService: MovieService, private router: Router,) { }

  ngOnInit() {
  }

  selectMovieHandler(movie) {
    this.router.navigate([`/movie/detail/${movie._id}`]);
  }

  deleteMovieHandler(movie) {
    this.movieService.deleteMovie(movie);
  }
}
