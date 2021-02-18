import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {DataTransferService} from './data-transfer.service';
import {NextModule} from './next/next.module';
import {HelloComponent} from './hello/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'next', loadChildren: () => import('./next/next.module').then(m => m.NextModule)
      }
    ]),
    NextModule,
    FormsModule,

  ],
  providers: [DataTransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
