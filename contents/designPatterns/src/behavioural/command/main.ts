import { SmartHouseLight } from "./smart-house-light";
import { LightPowerCommand } from './light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { LightIntensityCommand } from './light-intensity-command';

// Receiver
const bedroomLight = new SmartHouseLight('Luz do Quarto');
const bathroomLight = new SmartHouseLight('Luz do Banheiro');

// Command
const bedroomLightPowerCommand = new LightPowerCommand(bedroomLight);
const bathroomLightPowerCommand = new LightPowerCommand(bathroomLight);
const bedroomLightIntensityCommand = new LightIntensityCommand(bedroomLight);

// Controle - Invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommands('btn-1', bedroomLightPowerCommand);
smartHouseApp.addCommands('btn-2', bathroomLightPowerCommand);
smartHouseApp.addCommands('btn-3', bedroomLightIntensityCommand);

smartHouseApp.executeCommand('btn-1');
smartHouseApp.undoCommand('btn-1');

smartHouseApp.executeCommand('btn-2');

for (let i = 0; i < 7; i++) {
  smartHouseApp.executeCommand('btn-3');
}

for (let i = 0; i < 3; i++) {
  smartHouseApp.undoCommand('btn-3');
}
