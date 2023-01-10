const { app, BrowserWindow, ipcMain } = require('electron');
const { join } = require('path');
const ejse = require('ejs-electron');
//const electronReload = require('electron-reload')
//electronReload(__dirname, {})

let mainWindow;
let webhookWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 830,
    height: 520,
    titleBarStyle: "hidden",
    menuBarVisible: true,
    skipTaskbar: false,
    title: "Discord Nitro Codes Generator",
    fullscreenable: false,
    resizable: false,
    icon: './assets/icon.png',
    transparent: true,
    webPreferences: {
      spellcheck: false,
      preload: join(__dirname, "scripts", "preload.js"),
      devTools: true
    }
  });
  mainWindow.loadFile(join(__dirname+'/app/index.ejs'));
  if(process.platform === "darwin")
  mainWindow.setWindowButtonVisibility(false);
};

function webhookWindowFunc() {
  webhookWindow = new BrowserWindow({
    width: 830,
    height: 520,
    title: 'Discord Nitro Webhook Generator'
  });
  webhookWindow.setMenu(null);

  webhookWindow.loadFile(join(__dirname+'/app/webhook.ejs'))
  webhookWindow.on('closed', () => {
    webhookWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

ipcMain.on("webhookWindow", () => {
  webhookWindowFunc();
})

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});