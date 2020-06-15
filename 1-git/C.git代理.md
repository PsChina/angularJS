# git代理
无论是 github 还是 gitlab 都是境外网站，常常会有网络延迟导致卡顿，当我们的远端仓库中在境外或者需要经过很多节点的时候我们可以给 git 设置代理来加速对远端仓库的访问速度。


## 设置代理

http代理：
```bash
git config --global http.proxy http://xxx.x.x.x:xxxx

git config --global https.proxy http://xxx.x.x.x:xxxx
```

socks5代理：
```bash
git config --global http.proxy 'socks5://xxx.x.x.x:xxxx'

git config --global https.proxy 'socks5://xxx.x.x.x:xxxx'
```

## 取消代理

```bash
git config --global --unset http.proxy


git config --global --unset https.proxy
```

## 更改 github host 

```bash
vi /etc/hosts
```

添加 `192.30.253.113 github.com`
