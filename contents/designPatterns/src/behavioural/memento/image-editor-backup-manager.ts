import { ImageEditor } from './image-editor';
import { Memento } from "./memento";

export class ImageEditorManagerBackup {
  mementos: Memento[] = []
  constructor (private readonly imageEditorOriginator: ImageEditor) {}

  backup(): void {
    console.log('Backup realizado com sucesso');
    this.mementos.push(this.imageEditorOriginator.save());
  }

  undo(): void {
    const lastStateMemento = this.mementos.pop();

    if (lastStateMemento) {
      this.imageEditorOriginator.restore(lastStateMemento);
      console.log(`Backup ${lastStateMemento.getName()} foi restaurado com sucesso`);
      return;
    }

    console.log('Backup: no mementos');
  }

  showMementos(): void {
    for (const memento of this.mementos) {
      console.log(memento);
    }
  }
}