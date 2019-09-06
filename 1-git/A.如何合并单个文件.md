# 如何合并单个文件

假设你有两个分支它们分别是 A 和 B。

你在分支 A 上开发的某个文件（file.js）分支 B 也要用到 但是你不想把 A 上的所有更改都合并到 B 上去，这时候可以这样做：

```bash
git checkout B
cd path/to/file.js
git checkout A file.js
```

(完)