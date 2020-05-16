import { Component, OnInit} from '@angular/core';
import { SearchService } from '../search.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Song } from '../Song';
@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {

  constructor(
    private searchService : SearchService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  song: Song;

  readonly ROOT_URL = 'https://www.songsterr.com/a/ra/songs.json';

  searchTerm : string;

  getSong() : void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.song = this.searchService.getSelected();
  }

  goBack() : void{
    this.location.back();
  }

  ngOnInit(): void {
    this.getSong();
  }

}
