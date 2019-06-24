import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookedStorageComponent } from './booked-storage/booked-storage.component';
import { DetailsComponent } from './details/details.component';
import { BookingsComponent } from './bookings/bookings.component';

const routes: Routes = [
 {path:'booked-storage',component:BookedStorageComponent} ,
 {path:'details', component:DetailsComponent},
 {path:'bookings', component:BookingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

