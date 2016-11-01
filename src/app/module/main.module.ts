/**
 * Created by yuriel on 11/1/16.
 */
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {DTMainComponent} from "../component/main.component";
import {DTHeaderComponent} from "../component/header.component";
import {DTDrawerComponent} from "../component/drawer.component";
import {DTContainerComponent} from "../component/container.component";
@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [
        DTMainComponent,
        DTHeaderComponent,
        DTDrawerComponent,
        DTContainerComponent
    ],
    bootstrap: [DTMainComponent]
})
export class DTMainModule { }