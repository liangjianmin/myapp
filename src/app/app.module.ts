import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ContentComponent} from './content/content.component';
import {StarsComponent} from './stars/stars.component';
import {PersonComponent} from './person/person.component';

const routeConfig: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: ContentComponent},
    {path: 'person', component: PersonComponent}
];


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ContentComponent,
        StarsComponent,
        PersonComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routeConfig)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
