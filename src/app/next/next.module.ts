import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextComponent } from './next/next.component';
import {RouterModule} from '@angular/router';
import {DataTransferService} from '../data-transfer.service';
import {FormsModule} from '@angular/forms';
import { HelloComponent } from '../hello/hello.component';



@NgModule({
  declarations: [NextComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: NextComponent
      }
    ]),
    FormsModule
  ],
  exports: [
  ],
  providers: []
})
export class NextModule { }
