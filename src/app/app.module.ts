import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { HackerNewsService } from './services/hacker-news.service';
import { ScrollListenerService } from './services/scroll-listener.service';
import { ScrollListenerDirective } from './directives/scroll-listener.directive';
import { ScrollSpyDirective } from './directives/scroll-spy.directive';
import { InteractionsComponent } from './modules/interactions/interactions.component';
import { ParentComponent } from './modules/interactions/parent/parent.component';
import { SonComponent } from './modules/interactions/son/son.component';
import { DaughterComponent } from './modules/interactions/daughter/daughter.component';
import { HovercraftDirective } from './directives/hovercraft.directive';
import { TextUtils } from './shared/utils/text-utils';
import { SimpleScrollDirective } from './directives/simple-scroll.directive';
import { ReactiveStickyHeaderDirective } from './directives/reactive-sticky-header.directive';
import { AddClassDirective } from './directives/add-class/add-class.directive';
import { ReactiveProgrammingComponent } from './modules/reactive-programming/reactive-programming.component';
import { RecipesModule } from './modules/recipes/recipes.module';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PageNotFoundComponent,
    HeaderComponent,
    HomePageComponent,
    AboutComponent,
    ProjectsComponent,
    TestimonialsComponent,
    ScrollListenerDirective,
    ScrollSpyDirective,
    InteractionsComponent,
    ParentComponent,
    SonComponent,
    DaughterComponent,
    HovercraftDirective,
    SimpleScrollDirective,
    ReactiveStickyHeaderDirective,
    AddClassDirective,
    ReactiveProgrammingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RecipesModule,
    ReactiveFormsModule
  ],
  providers: [HackerNewsService, ScrollListenerService, TextUtils],
  bootstrap: [AppComponent]
})
export class AppModule { }

// another way to declare through spread

//const modules = [
//  CommonModule,
//  MatFormFieldModule,
//  MatInputModule,
//  MatSelectModule,
//  MatSlideToggleModule,
//  FormsModule,
//  ReactiveFormsModule,
//  MatOptionModule,
//  MatProgressSpinnerModule,
//  TranslateModule
//];
//
//const components = [
//  AvatarComponent,
//  NotFoundComponent,
//  PaginationComponent,
//  SlideToggleComponent
//];
//
//const directives = [
//  AccButtonDirective,
//  StickyNavigationDirective,
//  ScrollSpyDirective
//];
//
//
//@NgModule({
//  imports: [
//    ...modules
//  ],
//  declarations: [
//    ...components,
//    ...directives
//  ],
//  exports: [
//    ...components,
//    ...directives,
//    ...modules
//  ]
//})
