import { NgModule } from '@angular/core';
import {TabMenuModule} from 'primeng/tabmenu';
import {TabViewModule} from 'primeng/tabview';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import {StepsModule} from 'primeng/steps';
import {CheckboxModule} from 'primeng/checkbox';

import {SelectButtonModule} from 'primeng/selectbutton';
import {SidebarModule} from 'primeng/sidebar';
import {GMapModule} from 'primeng/gmap';
import {CarouselModule} from 'primeng/carousel';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
    imports: [
        TabMenuModule,
        TabViewModule,
        DropdownModule,
        InputTextModule,
        RadioButtonModule,
        CardModule,
        DialogModule,
        StepsModule,
        SelectButtonModule,
        CheckboxModule,
        SidebarModule,
        GMapModule,
        CarouselModule,
        ToastModule,
        CalendarModule

    ],
    exports: [
        TabMenuModule,
        TabViewModule,
        DropdownModule,
        InputTextModule,
        RadioButtonModule,
        CardModule,
        DialogModule,
        StepsModule,
        SelectButtonModule,
        CheckboxModule,
        SidebarModule,
        GMapModule,
        CarouselModule,
        ToastModule,
        CalendarModule

    ]
})

export class PrimeNgModule {}
