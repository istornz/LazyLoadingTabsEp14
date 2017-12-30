// Angular core
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

// Page
import { TabsPage } from './tabs';

@NgModule({
  declarations: [ TabsPage ],
  imports: [ IonicPageModule.forChild(TabsPage) ],
  exports: [ TabsPage ]
})
export class TabsPageModule { }