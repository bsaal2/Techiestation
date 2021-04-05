import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { GadgetComponent } from './gadget/gadget.component';
import { VideoComponent } from './video/video.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ScienceComponent } from './science/science.component';
import { TechnologyComponent } from './technology/technology.component';
import { LaptopComponent } from './laptop/laptop.component';
import { GameComponent } from './game/game.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    DetailComponent,
    GadgetComponent,
    VideoComponent,
    ReviewsComponent,
    ScienceComponent,
    TechnologyComponent,
    LaptopComponent,
    GameComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
