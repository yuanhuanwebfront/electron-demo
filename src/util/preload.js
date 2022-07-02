const { contextBridge, ipcRenderer }  = require('electron');


// 将该文件添加至渲染器流程。
window.addEventListener('DOMContentLoaded', () => {

  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if(element) element.innerText = text;
  }

  for(const depend of ['chrome', 'node', 'electron']){
    replaceText(`${depend}-version`, process.versions[depend]);
  }

});

// 将electron的函数暴露到
contextBridge.exposeInMainWorld('eletronAPI', {
  setTitle: title => ipcRenderer.send('set-title', title)
})