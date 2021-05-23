import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { LoginResponse } from '../entities/loginResponse';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  readonly AUTH_KEY = 'token';
  readonly ROL_KEY = 'rol';
  readonly USER_ID_KEY = 'userId';

  constructor() {}

  async set(key: string, value: any): Promise<void> {
    await Storage.set({
      key: key,
      value: JSON.stringify(value),
    });
  }

  async setLoginData(response: LoginResponse): Promise<void> {
    await Storage.set({
      key: this.AUTH_KEY,
      value: JSON.stringify(response.token),
    });
    await Storage.set({
      key: this.ROL_KEY,
      value: JSON.stringify(response.rol),
    });
    await Storage.set({
      key: this.USER_ID_KEY,
      value: JSON.stringify(response.userId),
    });
  }

  async get(key: string): Promise<any> {
    const item = await Storage.get({ key: key });
    return JSON.parse(item.value);
  }

  async remove(key: string): Promise<void> {
    await Storage.remove({
      key: key,
    });
  }

  logout() {
    this.remove(this.AUTH_KEY);
    this.remove(this.ROL_KEY);
    this.remove(this.USER_ID_KEY);
  }
}
