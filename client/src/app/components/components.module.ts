import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { ContactListComponent } from "./contact-list/contact-list.component";
import { NavigationComponent } from "./navigation/navigation.component";

@NgModule({
    declarations: [
        ContactFormComponent,
        ContactListComponent,
        NavigationComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        ContactFormComponent,
        ContactListComponent,
        NavigationComponent
    ]
})

export class ComponentsModule { }