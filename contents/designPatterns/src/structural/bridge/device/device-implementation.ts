export interface DeviceImplementation {
  getName(): string;
  setPower(PowerStatus: boolean): void;
  getPower(): boolean;
  setVolume(volume: number): void;
  getVolume(): number;
}
