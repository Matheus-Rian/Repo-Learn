import { DeviceImplementation } from './device-implementation';

export class Tv implements DeviceImplementation {
  private volume = 10;
  private name = 'TV';
  private power = false;
  
  getName(): string {
    return this.name;
  }

  setPower(PowerStatus: boolean): void {
    this.power = PowerStatus;
  }

  getPower(): boolean {
    return this.power;
  }

  setVolume(volume: number): void {
    if (volume < 0 || volume > 100)
      return;

    this.volume = volume
  }

  getVolume(): number {
    return this.volume;
  }
}
