import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GithubComponent } from './github/github.component';
import { LinkedInComponent } from './linked-in/linked-in.component';
import { MetaMovieComponent } from './meta-movie/meta-movie.component';
import { PortFolioComponent } from './port-folio/port-folio.component';

const routes: Routes = [
  { path: 'github', component: GithubComponent },
  { path: 'github/meta-movie', component: MetaMovieComponent },
  { path: 'home', component: AboutComponent },
  { path: 'port-folio', component: PortFolioComponent },
  { path: 'linked-in', component: LinkedInComponent },
  { path: '**', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
