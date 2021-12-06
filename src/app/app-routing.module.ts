import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GithubComponent } from './github/github.component';
import { LinkedInComponent } from './linked-in/linked-in.component';
import { MetaMovieComponent } from './github/github-project/meta-movie/meta-movie.component';
import { PortFolioComponent } from './port-folio/port-folio.component';
import { GithubProjectComponent } from './github/github-project/github-project.component';
import { FreezerPracticeComponent } from './github/github-project/freezer-practice/freezer-practice.component';

const routes: Routes = [
  {
    path: 'github',
    component: GithubProjectComponent,
    children: [
      { path: 'meta-movie', component: MetaMovieComponent },
      { path: 'freezer-practice', component: FreezerPracticeComponent },
    ],
  },
  { path: 'github/home', component: GithubComponent },
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
