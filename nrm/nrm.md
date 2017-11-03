# nrm

    nrm 是一个npm的源管理工具

## 获取

    npm install nrm -g

## 使用

### nrm ls

    查看所有源

### nrm test

    测试各个源的链接延迟

### nrm use

    切换到某个源

    例如 nrm use cnpm

### nrm current

    查看当前使用的源

### nrm help

    查看所有nrm命令


### 后记
    cnpm 与 npm 的优劣
    由于防火长城的存在 使得我们的一些npm包无法通过，导致下载失败，但cnpm使用了vpn(虚拟专用网络)绕开了防火长城 每15分钟会与npm保持同步
    cnpm的服务器在国内所以速度比较快
    npm 使用官网源 所以可以正常发布npm包
    在使用cnpm时使用的不是 npm官网源 所以无法登录npm账号，也就无法发布npm包了。 

