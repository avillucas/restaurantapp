import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { LoginTestData } from '../entities/loginTestData';
import { SysError } from '../entities/sysError';
import { USUARIOS_TEST } from '../../seed/usuarios';
import { SpinnerService } from './spinner.service';
 
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  protected usuariosTest;
  isAuthenticated : BehaviorSubject<boolean>= new BehaviorSubject<boolean>(null);      

  constructor(    
    private storageService:StorageService,
    private spinnerService:SpinnerService

  ) {
  }

  login(postData : { username:string , password:string } ): Observable<any> {    
    this.spinnerService.mostrarSpinner();
    //@todo completar
    return new Observable(
      resolve =>{        
        setTimeout(()=>{      
          throw new SysError('Aun no implementado.');
        },1300);    
      }
    );       
  }

  register(postData: {username:string, password:string}): Observable<any> { 
    throw new SysError('Aun no implementado.');
    //@todo completar
    return null;    
  }

  logout() {
    this.isAuthenticated.next(false);
    return this.storageService.logout();
  }  

  //@todo tomar esto del listado para el seeder que popule la base de datos
  getUsuariosTest( ) : LoginTestData[]{        
    return USUARIOS_TEST; 
  }

  getUsuarioTest(id:number):LoginTestData{
    const users = this.getUsuariosTest();
    return users.find((data:LoginTestData) => data.id == id);
  }
}
