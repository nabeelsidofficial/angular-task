import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { provideRouter, Route, RouterLink } from '@angular/router';
import { EventComponent } from './event/event.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'home', component: HomeComponent },
    {path: 'product', component: ProductComponent },
    {path: 'event', component: EventComponent },
    {path: 'navbar', component: NavbarComponent },
];
