import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BreadcrumbAllModule, MenuModule } from '@syncfusion/ej2-angular-navigations';
import { ChipListModule } from '@syncfusion/ej2-angular-buttons';
import { Component, ViewEncapsulation } from '@angular/core';
import { getComponent } from '@syncfusion/ej2-base';
import { Breadcrumb } from '@syncfusion/ej2-navigations';

@Component({
    standalone: true,
    imports: [ BreadcrumbAllModule, ChipListModule, MenuModule,  CommonModule],
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    
    // To refresh Breadcrumb control state when reset button clicked
    public btnClick() {
        let breadcrumb: any, breadcrumbInst: any, breadcrumbs: any = document.querySelector('.content-wrapper').getElementsByClassName("e-breadcrumb");
        for (var i = 0; i < breadcrumbs.length; i++) {
            breadcrumb = breadcrumbs[i];
            breadcrumbInst = (getComponent(breadcrumb as HTMLElement, 'breadcrumb') as Breadcrumb);
            breadcrumbInst.activeItem = breadcrumbInst.items[breadcrumbInst.items.length - 1].text;
        }
    }
}