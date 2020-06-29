import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { InputStreamComponent } from './input-stream/input-stream.component';
import { OutputStreamComponent } from './output-stream/output-stream.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';

@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponent,
    InputStreamComponent,
    OutputStreamComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
