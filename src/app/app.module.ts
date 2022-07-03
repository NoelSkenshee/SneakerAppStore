import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeviceDetectorService } from 'ngx-device-detector';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SnickerService } from './services/snicker/snicker.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailsComponent } from './components/details/details.component';

import 'hammerjs';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { RouteModule } from './routes/route/route.module';
import { EventCard } from './services/events/addToCard';
import { CartComponent } from './components/cart/cart.component';
import { ReadCard } from './services/events/readCart';
import { PayModalComponent } from './components/pay-modal/pay-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CleanCart } from './services/events/CleanCart';
import { ToastService } from 'src/app/services/message/toast.service';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DetailsComponent,
    MenuComponent,
    CartComponent,
    PayModalComponent,
    SpinnerComponent,
  ],
  exports: [MatInputModule, MatFormFieldModule, MatSelectModule],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatBadgeModule,
    MatButtonModule,
    MatGridListModule,
    HttpClientModule,
    MatCardModule,
    RouteModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
  ],

  providers: [
    SnickerService,
    EventCard,
    ReadCard,
    CleanCart,
    InputDeviceInfo,
    DeviceDetectorService,
    ToastrService,
    ToastService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
