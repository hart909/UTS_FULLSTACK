import { Component, OnInit } from '@angular/core';
import { Film } from '../../../shared/models/Film';
import { FilmService } from '../../../services/film.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  films:Film[] =[];
  constructor(private filmService:FilmService , activatedRoute:ActivatedRoute) { 
    activatedRoute.params.subscribe((params) =>{
      if(params.searchTerm)
        this.films= this.filmService.getAllFilmsBySearchTerm(params.searchTerm);
      else
      this.films = filmService.getAll();
    })
  }

  ngOnInit(): void {

  }
}
