import { Component } from '@angular/core';
import { Film } from '../../../shared/models/Film';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../../../services/film.service';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrl: './film-page.component.css'
})
export class FilmPageComponent {
film!: Film;
constructor(activatedRoute:ActivatedRoute, filmService:FilmService){
  activatedRoute.params.subscribe((params) =>{
    if(params.id)
      this.film = filmService.getFilmById(params.id);
  })
}

}

