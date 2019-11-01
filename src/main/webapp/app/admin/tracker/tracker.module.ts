import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Jh641SharedModule } from 'app/shared/shared.module';

import { JhiTrackerComponent } from './tracker.component';

import { trackerRoute } from './tracker.route';

@NgModule({
  imports: [Jh641SharedModule, RouterModule.forChild([trackerRoute])],
  declarations: [JhiTrackerComponent]
})
export class TrackerModule {}
