import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { BookedStorageComponent } from './booked-storage/booked-storage.component';
import { DashboardOwnerComponent } from './dashboard-owner/dashboard-owner.component';
import { ListedStorageComponent } from './listed-storage/listed-storage.component';
import { DetailsComponent } from './details/details.component';
import { BookingsComponent } from './bookings/bookings.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchResultsComponent } from './search-results/search-results.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    FooterComponent,
    DashboardUserComponent,
    RecommendationsComponent,
    BookedStorageComponent,
    DashboardOwnerComponent,
    ListedStorageComponent,
    DetailsComponent,
    BookingsComponent,
    ConfirmationComponent,
    LoginComponent,
    RegisterComponent,
    SearchResultsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
