import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { HouseComponent } from './house/house.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FormComponent } from './form/form.component';
import { BrothersComponent } from './Brothers/brothers.component';
import { BrotherPortalComponent } from './brother-portal/brother-portal.component';

const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'brothers', component: BrothersComponent},
    {path: 'house', component: HouseComponent},
    {path: 'newsletter', component: NewsletterComponent},
    {path: 'form', component: FormComponent},
    {path: 'brother', component: BrotherPortalComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);