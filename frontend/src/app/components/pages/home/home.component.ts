import { Component, OnInit } from '@angular/core';
import { Film } from '../../../shared/models/Film';
import { FilmService } from '../../../services/film.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  films:Film[] =[];
  constructor(private filmService:FilmService) { 
    this.films = filmService.getAll();
  }

  ngOnInit(): void {

  }
}
