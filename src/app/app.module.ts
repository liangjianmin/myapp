import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppRoutingModule} from './app.router';

import {AppComponent} from './app.component';
import {HeaderComponent} from './views/common/header/header.component';
import {StarsComponent} from './components/stars/stars.component';
import {PersonComponent} from './views/person/person.component';
import {DetailsComponent} from './views/details/details.component';
import {ContentService} from './service/content.service';
<<<<<<< .merge_file_a11368
import { CookbookComponent } from './views/cookbook/cookbook.component';
=======
import { SlideComponent } from './views/common/slide/slide.component';
import { HomeComponent } from './views/home/home.component';
>>>>>>> .merge_file_a09128


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        StarsComponent,
        PersonComponent,
        DetailsComponent,
<<<<<<< .merge_file_a11368
        CookbookComponent
=======
        SlideComponent,
        HomeComponent
>>>>>>> .merge_file_a09128
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
