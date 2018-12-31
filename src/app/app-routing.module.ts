import { NgModule } from '@angular/core';

/*The Angular Router is an optional service that presents
a particular component view for a given URL.
It is not part of the Angular core.*/
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { InteractionsComponent } from './modules/interactions/interactions.component';
import { ReactiveProgrammingComponent } from './modules/reactive-programming/reactive-programming.component';
import { RecipeLandingComponent } from './modules/recipes/recipe-landing/recipe-landing.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'interactions', component: InteractionsComponent },
  { path: 'rxjs', component: ReactiveProgrammingComponent },
  { path: 'recipes', component: RecipeLandingComponent },
  { path: '404', component: PageNotFoundComponent },
  /* The application needs a default route to a valid page.
  The preferred solution is to add a redirect route that translates
   the initial relative URL ('') to the desired default path (/profile).
   The browser address bar shows .../heroes as if you'd navigated there directly.*/
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*A routed Angular application has one singleton instance of the Router service.
When the browser's URL changes, that router looks for a corresponding Route
from which it can determine the component to display.*/
