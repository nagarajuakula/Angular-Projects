import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AuthComponent } from './auth.component';

const authRoutes: Routes = [
    { 
        path: 'login', component: AuthComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(authRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule {

}