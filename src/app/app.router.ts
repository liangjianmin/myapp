import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DetailsComponent} from './views/details/details.component';
import {PersonComponent} from './views/person/person.component';
import {HomeComponent} from './views/home/home.component';
import {CookbookComponent} from './views/cookbook/cookbook.component';
import {RegisterComponent} from './views/person/register/register.component';
import {LoginComponent} from './views/person/login/login.component';


const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'cook', component: CookbookComponent},
    {path: 'details/:id', component: DetailsComponent},
    {path: 'person', component: PersonComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
