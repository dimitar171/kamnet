import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PagerComponent } from './components/pager/pager.component';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './components/text-input/text-input.component';
import {MatStepperModule} from '@angular/material/stepper';

import { StepperComponent } from './components/stepper/stepper.component';
import { BasketSummaryComponent } from './components/basket-summary/basket-summary.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PagingHeaderComponent, PagerComponent, OrderTotalsComponent, TextInputComponent, StepperComponent, BasketSummaryComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    MatStepperModule,
    RouterModule
  ],
  exports:[PaginationModule,
    PagingHeaderComponent,
    PagerComponent, 
    CarouselModule, 
    OrderTotalsComponent,
    ReactiveFormsModule, 
    FormsModule,
    BsDropdownModule,
    TextInputComponent,
    MatStepperModule,
  StepperComponent,
BasketSummaryComponent]

})
export class SharedModule { }
