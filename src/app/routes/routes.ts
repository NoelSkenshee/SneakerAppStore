import { Route } from '@angular/router';
import { MenuComponent } from '../components/menu/menu.component';
import { DetailsComponent } from '../components/details/details.component';
import { CartComponent } from '../components/cart/cart.component';
import { PATH_ROUTE } from '../inmutables/const';

export const routes: Route[] = [
  { path: PATH_ROUTE.menu, component: MenuComponent },
  { path: '', redirectTo: PATH_ROUTE.menu, pathMatch: 'full' },
  { path: PATH_ROUTE.details, component: DetailsComponent },
  { path: PATH_ROUTE.cart, component: CartComponent },
];
