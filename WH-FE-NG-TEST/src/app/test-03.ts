/**
 * Update the following components to meet the requirements : 
 * 
 * * Bind [email] property to input[name="email"]
 * * Bind [password] property to input[name="password"]
 * 
 * Without using angular forms, validate both fields so that :
 * * email is in correct format ( ex: ends with @a.com)
 * * password contains at least one special character, one upper case character, one lower case character, one number and a minium of 8 characters in length
 * * The fields should be validated when trying to submit the form
 * * Prevent the form from doing an actual form submit and instead, after validation pass, turn on the [logged_in] flag
 * 
 * You can add error messages below each field that shows if the field is not valid
 */
import { Component, NgModule  } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
    selector : 'ng-app',
    template : `<form (submit)="submitForm($event)" >
                    <h2>Login</h2>
                    <br/>
                    <input type="email" [(ngModel)]="email" name="email" />
										<p *ngIf="errors.email">{{errors.email}}</p>
                    <br/>
                    <input type="password" [(ngModel)]="password"  name="password" />
										<p *ngIf="errors.password">{{errors.password}}</p>

                    <button type="submit">Submit</button>
                    <br/><br/>
                    <div *ngIf="logged_in">Logged In!</div>
                </form>`
})
export class Test03Component {

    email:string = "";
    password:string = "";
    logged_in = false;

		errors = {
			email: "",
			password: ""
		}

		validateForm(){
			this.errors.email = /[\w\-\._]+@[\w\-\._]+\.\w{2,10}/.test(this.email) ? "" : "Email is invalid";
			this.errors.password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(this.password) ? "" : "Password is invalid";
			return !Object.values(this.errors).some(message => !!message);
		}

		submitForm(e: SubmitEvent){
			e.preventDefault();
			this.logged_in = this.validateForm();
		}
}

@NgModule({
    imports : [
				FormsModule,
        CommonModule,
        RouterModule.forChild([
            {
                path : "",
                component : Test03Component
            }
        ])
    ],
    declarations : [Test03Component]
})
export class Test03Module {};