/**
 * In the following component, update the code so that when the value of the [loan-amount] is changed:
 * * If it's blank or 0, the values of [monthly_payment] and [late_payment] becomes "N/A",
 * * If it has a value, the value of [monthly_payment] becomes 2% of [loan-ammount] and the value of [late_payment] becomes 5% of [monthly_payment].
 * * Both [monthly_payment] and [late_payment] should print in the template in currency format : $1,234
 */

import { Component, Input, NgModule  } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
    selector : 'ng-app',
    template : `<div>
                    <h2>Loan Details</h2>
                    <b>Monthly Payment:</b> {{monthly_payment === 'N/A' ? monthly_payment : (monthly_payment | currency:'USD':'symbol':'1.0-0') }} <br/>
                    <b>Late Payment Fee : {{late_payment === 'N/A' ? late_payment : (late_payment | currency:'USD':'symbol':'1.0-0')}}</b> <br/>
                </div>`
})
export class Test01Component {

    loan_amount:number = 1000;
    monthly_payment:number | string = 200;
    late_payment:number | string = 10;

		ngOnInit() {
			this.calcLoanDetails();
		}

		calcLoanDetails(){
			if (this.loan_amount <= 0 || !this.loan_amount) {
				this.monthly_payment = 'N/A';
				this.late_payment = 'N/A';
			} else {
				this.monthly_payment = 0.02 * this.loan_amount;
				this.late_payment = 0.05 * this.monthly_payment;
			}
		}
}

@NgModule({
    imports : [
			CommonModule,
			RouterModule.forChild([
							{
									path : "",
									component : Test01Component
							}
					])
			],
			declarations : [Test01Component]
})
export class Test01Module {}