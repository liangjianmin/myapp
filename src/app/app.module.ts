import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app.router';

import {AppComponent} from './app.component';
import {HeaderComponent} from './views/common/header/header.component';
import {StarsComponent} from './components/stars/stars.component';
import {PersonComponent} from './views/person/person.component';
import {DetailsComponent} from './views/details/details.component';
import {ContentService} from './service/content.service';
import {CookbookComponent} from './views/cookbook/cookbook.component';
import {SlideComponent} from './views/common/slide/slide.component';
import {HomeComponent} from './views/home/home.component';
import {FootsComponent} from './views/foots/foots.component';
import {AppService} from './app.service';
import { PublicComponent } from './views/common/public/public.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        StarsComponent,
        PersonComponent,
        DetailsComponent,
        CookbookComponent,
        SlideComponent,
        HomeComponent,
        FootsComponent,
        PublicComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [AppService, ContentService],
    bootstrap: [AppComponent]
})
export class AppModule {

    /**
     * 设置页面的title
     * @type {string}
     */

    public title: string = '首页';

    constructor(private appService: AppService) {

        this.appService.titleEventEmitter.subscribe((value: string) => {
            if (value) {
                this.title = value;
                document.title = value;
            } else {
                document.title = this.title;
            }
        });
    }
}
