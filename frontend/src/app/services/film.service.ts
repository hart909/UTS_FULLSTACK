import { Injectable } from '@angular/core';
import { Film } from '../shared/models/Film'
import { sample_film } from '../../data';
@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor() { }

  getAll():Film[]{
    return sample_film
  }
}
