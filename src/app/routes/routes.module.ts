import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomFormsModule } from 'ng2-validation';
import { FileUploadModule } from 'ng2-file-upload';

import * as HOME from './home';
import * as FORMS from './forms';
import { MenuService } from '../core/menu/menu.service';
import { SharedModule } from '../shared/shared.module';
import appMenu from './menu';
import appRoutes from './routes';

// used to map object of imports into array so we can use
// the spread operator in the ngModule definition
const arr = obj => Object.keys(obj).map(name => obj[name]);

@NgModule({
    imports: [
        SharedModule,
        // SelectModule,
        CustomFormsModule,


     ],
    declarations: [
        ...arr(HOME),

        ...arr(FORMS),


    ],

    exports: [
        RouterModule,
        // SelectModule,

        ...arr(HOME),
        ...arr(FORMS),

    ]
})

export class RoutesModule {
    constructor(private menu: MenuService) {
        menu.addMenu(appMenu);
    }
}
