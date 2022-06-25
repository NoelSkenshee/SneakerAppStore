import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import  {DeviceDetectorService} from "ngx-device-detector"
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { SnickerService } from './services/snicker/snicker.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailsComponent } from './components/details/details.component';

import 'hammerjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { RouteModule } from './routes/route/route.module';
import { EventCard } from './services/events/addToCard';
import { CartComponent } from './components/cart/cart.component';
import { ReadCard } from './services/events/readCart';
import { PayModalComponent } from './components/pay-modal/pay-modal.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { CleanCart } from './services/events/CleanCart';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DetailsComponent,
    MenuComponent,
    CartComponent,
    PayModalComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatInputModule,
    MatBadgeModule,
    MatButtonModule,
    MatGridListModule,
    HttpClientModule,
    MatCardModule,
    RouteModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    MatProgressSpinnerModule
  ],


    providers: [SnickerService, EventCard,ReadCard ,CleanCart,InputDeviceInfo,DeviceDetectorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
