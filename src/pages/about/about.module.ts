// Angular core
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

// Page
import { AboutPage } from './about';

@NgModule({
  declarations: [ AboutPage ],
  imports: [ IonicPageModule.forChild(AboutPage) ],
  exports: [ AboutPage ]
})
export class AboutPageModule { }