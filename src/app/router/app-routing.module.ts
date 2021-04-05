import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** Components import */
import { HomeComponent } from '../home/home.component';
import { DetailComponent } from '../detail/detail.component';
import { ContactComponent } from '../contact/contact.component';
import { GadgetComponent } from '../gadget/gadget.component';
import { VideoComponent } from '../video/video.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { ScienceComponent } from '../science/science.component';
import { TechnologyComponent } from '../technology/technology.component';
import { LaptopComponent } from '../laptop/laptop.component';
import { GameComponent } from '../game/game.component';
import { BlogComponent } from '../blog/blog.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tech-detail/:id',
    component: DetailComponent
  },
  {
    path: 'science',
    component: ScienceComponent
  },
  {
    path: 'technology',
    component: TechnologyComponent
  },
  {
    path: 'gadgets',
    component: GadgetComponent
  },
  {
    path: 'laptop',
    component: LaptopComponent
  },
  {
    path: 'game',
    component: GameComponent
  },
  {
    path: 'video',
    component: VideoComponent
  },
  {
    path: 'reviews',
    component: ReviewsComponent
  },
  {
    path: 'contact-us',
    component: ContactComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
