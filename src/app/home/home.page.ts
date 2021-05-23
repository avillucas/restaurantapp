import { Component, ComponentFactoryResolver } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(
    private spinnerSvc: SpinnerService
  ) {
  }

  
  /** Probando spinner */
  mostrarSpinner(){
    this.spinnerSvc.mostrarSpinner();

    setTimeout(() => {
      this.spinnerSvc.ocultarSpinner();
      console.log("prueba");
    }, 5000);
  }
}
