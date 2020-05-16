import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import { SongDetailComponent } from './song-detail/song-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  {path: 'search', component: SearchFormComponent},
  {path: 'detail/:id', component: SongDetailComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
