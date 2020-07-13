import { NgModule } from "@angular/core";
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        AuthComponent
    ],
    exports: [ 
        AuthComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            // left empty for lazy loading
            { path: '', component: AuthComponent }
        ]),
        SharedModule
    ]
})

export class AuthModule {}