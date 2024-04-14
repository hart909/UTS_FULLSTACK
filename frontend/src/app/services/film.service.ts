import { Injectable } from '@angular/core';
import { Film } from '../shared/models/Film'
import { sample_film, sample_tags } from '../../data';
import { Tag } from '../shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor() { }

  getAll():Film[]{
    return sample_film
  }
  getAllFilmsBySearchTerm(searchTerm:string){
    return this.getAll().filter(film => film.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  getAllTags():Tag[]{
    return sample_tags
  }
  getAllFilmsByTag(tag:string):Film[]{
  return tag === "All"?
  this.getAll():
  this.getAll().filter(film => film.tags?.includes(tag));
  }
  }

