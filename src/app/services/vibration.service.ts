import { Injectable } from '@angular/core';
//import { Vibration } from '@ionic-native/vibration/ngx';
import { Haptics, HapticsImpactStyle } from '@capacitor/haptics';

@Injectable({
  providedIn: 'root',
})
export class VibrationService {
  async on20Seconds() {
    console.log('vibrando');
    await Haptics.vibrate({ duration: 20 });
  }
}
