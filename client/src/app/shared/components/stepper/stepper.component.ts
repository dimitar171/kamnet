import {MatStepper} from '@angular/material/stepper';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [{provide: MatStepper, useExisting: StepperComponent}]
})
export class StepperComponent extends MatStepper implements OnInit {
  @Input() linearModeSelected!: boolean;

  ngOnInit(): void {
    this.linear = this.linearModeSelected;
  }

  onClick(index: number) {
    this.selectedIndex = index;

  }
  
 

}