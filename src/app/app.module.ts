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
import {ContentService} from './content/content.service';
import {DetailsComponent} from './details/details.component';


const routeConfig: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: ContentComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'person', component: PersonComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    StarsComponent,
    PersonComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
