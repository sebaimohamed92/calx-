import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { MypipelineComponent } from './mypipeline/mypipeline.component';
import { ItemsApproveComponent } from './items-approve/items-approve.component';
import { ActivitiesComponent } from './activities/activities.component';
import { EventsComponent } from './events/events.component';
import { CalendrierComponent } from './calendrier/calendrier.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    MypipelineComponent,
    ItemsApproveComponent,
    ActivitiesComponent,
    EventsComponent,
    CalendrierComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
