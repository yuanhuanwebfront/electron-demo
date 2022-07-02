/**
 * !  main.js  入口主进程
 * !  控制生命周期
 * !  显示原生界面
 * !  执行阶段会查找  package.json 下的 main字段下的文件
 * */ 


//  @params   app               控制应用程序的事件生命周期
//  @params   BrowserWindow     创建和管理应用程序窗口
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');


// 添加第一个createWindow方法将index.html加载进来
const createWindow = () => {


  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, './util/preload.js')
    }
  })


  // ipcMain来接收信息
  ipcMain.on('set-title', handleSetTitile)


  //  loadFile加载文件
  win.loadFile(path.join(__dirname, './page/index.html'));


}

// 处理函数
function handleSetTitile(event, title){
  const webContents = event.sender;
  const win = BrowserWindow.fromWebContents(webContents);
  win.setTitle(title);
}


// 在ready下去调用创建窗口的方法
app.whenReady().then(() => {

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

})


// 监听 window-all-closed事件判断是否退出
app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') app.quit();
})