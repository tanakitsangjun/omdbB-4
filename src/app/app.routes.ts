import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

import { InfoComponent } from './pages/info/info.component';

export const routes: Routes = [
    {path:'',component:MainComponent},
    // children:[
    //     {path:'result',component:InfomationComponent}
    // ]},
    {path:'info',component:InfoComponent}
];
