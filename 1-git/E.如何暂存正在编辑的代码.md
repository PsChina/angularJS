# 暂存代码

当我们在开发过程中，功能开发到一半如果遇到紧急任务，或者需要修复一个线上bug，需要切换分支，此时手头的任务不能立即完成，不合适commit，但是又需要切换分支，我们就可以使用git的暂存代码的功能了。

## git stash save stashMarkName

git stash save stashMarkName 这个命令可以帮助我们存储当前的修改。

stashMarkName 指的是此次暂存代码的备注信息

每次运行 git stash save xxxx 都会把当前未保存的代码入栈到 stash 列表里面 并生产一个索引 index  stash@{index}

## git stash list

这个命令可以查看所有暂存的代码列表例如

```bash
stash@{0}: On branchName: stashMarkNameA
stash@{1}: On branchName: stashMarkNameB
stash@{2}: On branchName: stashMarkNameC
```
## git stash pop stash@{index}

这个命令可以让指定的暂存代码出栈

如果想要备注为 stashMarkNameB 的暂存代码出栈可以这么写

```bash
git stash pop stash@{1}
```

而如果省略 stash{index}

```bash
git stash pop
```

则会出栈最近一次的暂存代码

类似的命令还有 git stash apply 它的作用和 git stash pop 类似但是只检出并不会出栈。

## git stash drop stash@{index}

该命令用于删除某个暂存代码

## git stash clear

该命令用于删除所有暂存代码 也就是清空暂存列表了

## git stash stash{index}

该命令用于查看某一条暂存代码的差异

git stash stash{index} -p 用于查看完整差异

(完)





