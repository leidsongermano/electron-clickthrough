const {Tray, Menu} = remote;
const path = require('path');

let trayIcon = new Tray(path.join('','electron-icon.png'));
let mainWindow = remote.getCurrentWindow();

const trayMenuTemplate = [
    { label: 'Minimize', click:  function(){
        mainWindow.hide();
    } },
    { label: 'Show App', click:  function(){
        mainWindow.show();
    } },
    { label: 'Quit', click:  function(){
        let app = remote.app;
        app.isQuiting = true;
        app.quit();
    } }
]

let trayMenu = Menu.buildFromTemplate(trayMenuTemplate);
trayIcon.setContextMenu(trayMenu);