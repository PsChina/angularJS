## 克隆含有子仓库的仓库

分为两步

1、克隆主仓库
2、克隆子仓库

### 克隆主仓库

这个就是普通的克隆一下仓库就行 通过 ssh 或者 http 链接

```bash
git clone xxxxxx
```

### 克隆子仓库

子仓库有两种方式分别是 `submodule` 和 `subtree` 这里介绍 `submodule` 这种

1、在克隆完主仓库以后我们 cd 到主仓库的根目录

2、运行命令

```bash
git submodule init
```

```bash
git submodule update
```

至此子仓库克隆完成
