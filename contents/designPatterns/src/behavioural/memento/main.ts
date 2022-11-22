import { ImageEditor } from './image-editor';
import { ImageEditorManagerBackup } from './image-editor-backup-manager';

const imageEditor = new ImageEditor('/media/image.png', 'png');
const backupManager = new ImageEditorManagerBackup(imageEditor);

backupManager.backup();
imageEditor.convertFormatTo('gif');

backupManager.backup();
imageEditor.convertFormatTo('bpm');

backupManager.backup();
imageEditor.convertFormatTo('mp4');

backupManager.undo();
backupManager.undo(); // Desfaz a última alteração, salva no backup
console.log(imageEditor);