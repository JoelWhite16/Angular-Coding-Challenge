import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Song } from './Song';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor() {}

  selectedSong : Song;

  setSelected(song: Song){
    this.selectedSong = song;
  }

  getSelected(): Song{
    return this.selectedSong;
  }

}
