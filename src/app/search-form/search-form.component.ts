import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from '../search.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Song } from '../Song';
import { Observable } from 'rxjs';
import { map, catchError, finalize} from 'rxjs/operators';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  readonly ROOT_URL = 'https://www.songsterr.com/a/ra/songs.json';

  searchTerm : string;
  songs$ : Observable<Song[]>;
  searching : boolean;

  getSongs() : void{
    this.searching = true;
    let params = new HttpParams().set('pattern', this.searchTerm);
    this.songs$ = this.http.get<Song[]>(this.ROOT_URL, {params}).pipe(
      map(x => x.slice(0,10)),
      catchError(this.handleError<Song[]>('getSongs', []))
    );
  }

  select(song: Song){
    this.searchService.setSelected(song);
  }

  /**
  * Handle Http operation that failed.
  */
  private handleError<T>(operation = 'operation', result?: T) {
  	return (error: any): Observable<T> => {
		  console.error(error);
		  console.log(`${operation} failed: ${error.message}`);
		  return of(result as T);
	  };
  }

  constructor(
    private http: HttpClient,
    private searchService : SearchService
  ) {}

  ngOnInit(): void {
  }

}
