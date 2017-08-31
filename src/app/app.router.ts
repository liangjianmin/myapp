import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ContentComponent} from './views/content/content.component';
import {DetailsComponent} from './views/details/details.component';
import {PersonComponent} from './views/person/person.component';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: ContentComponent},
    {path: 'details/:id', component: DetailsComponent},
    {path: 'person', component: PersonComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
