import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jh641SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Jh641SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class Jh641HomeModule {}
