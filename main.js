
// Module to control application life.
// Module to create native browser window.
const { app, BrowserWindow } = require('electron');

//app.disableHardwareAcceleration();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let reloadOnce = false;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({ transparent: true, frame: false, alwaysOnTop: true, skipTaskbar: true });
  mainWindow.setMenu(null);
  mainWindow.maximize();

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  mainWindow.on('minimize', function (event) {
    event.preventDefault();
    mainWindow.hide();
  });

  // mainWindow.on('close', function (event) {
  //     if(!application.isQuiting){
  //         event.preventDefault();
  //         mainWindow.hide();
  //     }

  //     return false;
  // });


  mainWindow.setIgnoreMouseEvents(true, { forward: true });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', () => {
  createWindow();
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});