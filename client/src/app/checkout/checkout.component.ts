import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account/account.service';
import { MatStepper } from '@angular/material/stepper';
import {  Input} from '@angular/core';

import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/models/basket';
import { CheckoutService } from './checkout.service';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @Input() checkoutForm!: FormGroup;

  constructor(private fb: FormBuilder, private accountService: AccountService,private basketService: BasketService, private checkoutService: CheckoutService, 
    private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.createCheckoutForm();
    this.getAddressFormValues();
  }
  goBack(stepper: MatStepper){
    stepper.previous();
}

goForward(stepper: MatStepper){
    stepper.next();
}
  

  createCheckoutForm() {
    this.checkoutForm = this.fb.group({
      addressForm: this.fb.group({
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        street: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required],
        zipCode: [null, Validators.required],
      }),
      deliveryForm: this.fb.group({
        deliveryMethod: [null, Validators.required]
      }),
      paymentForm: this.fb.group({
        nameOnCard: [null, Validators.required]
      })
    })
  }
  submitOrder() {
    const basket = this.basketService.getCurrentBasketValue();
    const orderToCreate = this.getOrderToCreate(basket);
    this.checkoutService.createOrder(orderToCreate).subscribe((order: any) => {
      this.toastr.success('Order created successfully');
      this.basketService.deleteLocalBasket(basket!.id);
      const navigationExtras: NavigationExtras = {state: order};
      this.router.navigate(['checkout/success'], navigationExtras);
    }, error => {
      this.toastr.error(error.message);
      console.log(error);
    })
  }

  private getOrderToCreate(basket: IBasket|null) {
    return {
      basketId: basket!.id,
      deliveryMethodId: +this.checkoutForm.get('deliveryForm')!.get('deliveryMethod')!.value,
      shipToAddress: this.checkoutForm.get('addressForm')!.value
    };
  }

  getAddressFormValues() {
    this.accountService.getUserAddress().subscribe(address => {
      if (address) {
        this.checkoutForm.get('addressForm')!.patchValue(address);
      }
    }, error => {
      console.log(error);
    })
  }

}