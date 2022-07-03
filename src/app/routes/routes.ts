import { Route } from '@angular/router';
import { MenuComponent } from '../components/menu/menu.component';
import { DetailsComponent } from '../components/details/details.component';
import { CartComponent } from '../components/cart/cart.component';
import { Utils } from '../inmutables/const';
const { menu, cart, details } = Utils.ROUTES;
export const routes: Route[] = [
  { path: menu, component: MenuComponent },
  { path: '', redirectTo: menu, pathMatch: 'full' },
  { path: details, component: DetailsComponent },
  { path: cart, component: CartComponent },
];
