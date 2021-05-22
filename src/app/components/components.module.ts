import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
  ],
  declarations: [SpinnerComponent],
  exports:[SpinnerComponent]
})
export class ComponentsPageModule {}
