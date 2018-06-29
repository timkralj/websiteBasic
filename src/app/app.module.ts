import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { routing } from './app.routing';
import { HouseComponent } from './house/house.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FormComponent } from './form/form.component';
import { BrothersComponent } from './Brothers/brothers.component';
import { BrotherThumbnailComponent } from './brother-thumbnail/brother-thumbnail.component';
import { BrotherPortalComponent } from './brother-portal/brother-portal.component';
import { BrotherService } from './shared/brother.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BrothersComponent,
    HouseComponent,
    NewsletterComponent,
    FormComponent,
    BrotherThumbnailComponent,
    BrotherPortalComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [BrotherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
