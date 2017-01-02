
import { LayoutComponent } from '../layout/layout.component';

import * as home from './home';

import * as forms from './forms';


const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [

            { path: '', redirectTo: 'home' },
            { path: 'home', component: home.HomeComponent },

            {
                path: 'forms',
                children: [
                   
                    { path: 'validation', component: forms.ValidationComponent }
                   
                ]
            },

           ]
    },



    // Not found
    { path: '**', redirectTo: 'home' }

];

export default routes;
