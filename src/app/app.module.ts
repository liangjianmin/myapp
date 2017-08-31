import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppRoutingModule} from './app.router';

import {AppComponent} from './app.component';
import {HeaderComponent} from './views/header/header.component';
import {ContentComponent} from './views/content/content.component';
import {StarsComponent} from './components/stars/stars.component';
import {PersonComponent} from './views/person/person.component';
import {DetailsComponent} from './views/details/details.component';


import {ContentService} from './service/content.service';
import { CookbookComponent } from './views/cookbook/cookbook.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ContentComponent,
        StarsComponent,
        PersonComponent,
        DetailsComponent,
        CookbookComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [ContentService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
