import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { LoginTestData } from '../entities/loginTestData';
import { SysError } from '../entities/sysError';
import { USUARIOS_TEST } from '../../seed/usuarios';
import { SpinnerService } from './spinner.service';
import { User } from '../entities/user';
import { AngularFireAuth } from '@angular/fire/auth';
import auth from 'firebase/firebase-auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  
  protected usuariosTest:LoginTestData[];

  public user$: Observable<User>;

  constructor(
    private storageService: StorageService,
    private fireAuth: AngularFireAuth,
    private fireStore: AngularFirestore
  ) {
    this.user$ = this.fireAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.fireStore.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    );
  }

  async resetPassword(email: string): Promise<void> {
    try {
      return this.fireAuth.sendPasswordResetEmail(email);
    } catch (error) {
      throw new SysError('Ocurrio al comunicarse con el servidor', error);
    }
  }

  async loginGoogle(): Promise<User> {
    try {
      const { user } = await this.fireAuth.signInWithPopup(
        new auth.GoogleAuthProvider()
      );
      this.updateUserData(user);
      return user;
    } catch (error) {
      throw new SysError('Ocurrio al comunicarse con el servidor', error);
    }
  }

  async sendVerificationEmail(): Promise<void> {
    try {
      return (await this.fireAuth.currentUser).sendEmailVerification();
    } catch (error) {
      throw new SysError('Ocurrio al comunicarse con el servidor', error);
    }
  }

  async register(postData: {
    username: string;
    password: string;
  }): Promise<User> {
    try {
      const { user } = await this.fireAuth.createUserWithEmailAndPassword(
        postData.username,
        postData.password
      );
      return user;
    } catch (error) {
      throw new SysError('Ocurrio al comunicarse con el servidor', error);
    }
  }

  async login(postData: { username: string; password: string }): Promise<User> {
    try {
      const { user } = await this.fireAuth.signInWithEmailAndPassword(
        postData.username,
        postData.password
      );
      this.updateUserData(user);
      //@todo storage
      return user;
    } catch (error) {
      throw new SysError(error);
    }
  }

  async logout(): Promise<void> {
    try {
      this.fireAuth.signOut();
    } catch (error) {
      throw new SysError(error);
    }
  }


  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.fireStore.doc(
      `users/${user.uid}`
    );
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      emailVerified: user.emailVerified,
    };

    return userRef.set(data, { merge: true });
  }

  getUsuariosTest(): LoginTestData[] {
    return USUARIOS_TEST;
  }

  getUsuarioTest(id: number): LoginTestData {
    const users = this.getUsuariosTest();
    return users.find((data: LoginTestData) => data.id == id);
  }

}
