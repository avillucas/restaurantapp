import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { LoginTestData } from '../entities/loginTestData';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isAuthenticated : BehaviorSubject<boolean>= new BehaviorSubject<boolean>(null);      

  constructor(    
    private storageService:StorageService
  ) {
  
  }

  login(postData : { username:string , password:string } ): Observable<any> {    
   //@todo completar
   return null;
  }

  register(postData: {username:string, password:string}): Observable<any> { 
    //@todo completar
    return null;    
  }

  logout() {
    this.isAuthenticated.next(false);
    return this.storageService.logout();
  }

  //@todo tomar esto del listado para el seeder
  getUsuariosTest( ) : LoginTestData[]{
    return  [
      {
        id:1,
        nombre:'Dueño 1',
        username:'hector@lodetito.com.ar',
        password:'1111'
      },
      {
        id:2,
        nombre:'Cocinero 1 ',
        username:'cocinero1@lodetito.com.ar',
        password:'1111'
      },
      {
        id:3,
        nombre:'Mozo 1 ',
        username:'mozo1@lodetito.com.ar',
        password:'1111'
      },
    ];        
  }

  getUsuarioTest(id:number):LoginTestData{
    const users = this.getUsuariosTest();
    return users.find((data:LoginTestData) => data.id == id);
  }
}
