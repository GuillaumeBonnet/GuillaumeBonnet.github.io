import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GithubComponent } from './github/github.component';
import { LinkedInComponent } from './linked-in/linked-in.component';
import { GithubProjectComponent } from './github/github-project/github-project.component';
import { MetaMovieComponent } from './github/meta-movie/meta-movie.component';
import { FreezerPracticeComponent } from './github/freezer-practice/freezer-practice.component';
import { PersonalSiteComponent } from './github/personal-site/personal-site.component';
import { WorkspacePreferenceComponent } from './github/workspace-preference/workspace-preference.component';
import { ArticlesComponent } from './articles/articles.component';
import { SalesforceDataCopyComponent } from './github/salesforce-data-copy/salesforce-data-copy.component';

const routes: Routes = [
  {
    path: 'github',
    component: GithubProjectComponent,
    children: [
      { path: 'salesforce-data-copy', component: SalesforceDataCopyComponent },
      { path: 'meta-movie', component: MetaMovieComponent },
      { path: 'freezer-practice', component: FreezerPracticeComponent },
      { path: 'personal-site', component: PersonalSiteComponent },
      { path: 'workspace-preference', component: WorkspacePreferenceComponent },
    ],
  },
  { path: 'github/home', component: GithubComponent },
  { path: 'about', component: AboutComponent },
  { path: 'linked-in', component: LinkedInComponent },
  { path: 'articles/lwc-typing', component: ArticlesComponent },
  { path: '**', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
