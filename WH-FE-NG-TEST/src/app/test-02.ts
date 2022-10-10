/**
 * Update the following components to meet the requirements : 
 * * Bind `field` of [textfield] component to its text input
 * * Pass value of `field` from [textfield] component to [title] property of component [ng-app]
 */
import { Component, NgModule, Output, EventEmitter } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
    selector : 'textfield',
		template: '<input type="text" [(ngModel)]="field" (ngModelChange)="titleEvent.emit($event)"/>'
})
export class TextField {
	field = '';
	@Output() titleEvent = new EventEmitter<string>();
}

@Component({
    selector : 'child-component',
		template: `<h2>Title:<h2><br/><textfield (titleEvent)="titleEvent.emit($event)"></textfield>`
})
export class ChildComponent {
	@Output() titleEvent = new EventEmitter<string>();
}


@Component({
    selector : 'ng-app',
    template : `<div>
                    <child-component (titleEvent)="title = $event"></child-component> <br/>
                    Title is {{title}}
                </div>`
})
export class Test02Component {

    title:string = "";
}

@NgModule({
    imports : [
				FormsModule,
        CommonModule,
        RouterModule.forChild([
            {
                path : "",
                component : Test02Component
            }
        ])
    ],
    declarations : [Test02Component,ChildComponent,TextField]
})
export class Test02Module {};