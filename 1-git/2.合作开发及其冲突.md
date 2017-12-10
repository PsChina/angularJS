# 多人合作开发

## 新建分支

### git branch 

    语法 : 
    git branch branchName

    例子 :
    git branch shanshan

## 查看分支 / 查看远端分支

###  git branch / git branch -a

    语法 : 
    git branch / git branch -a

    例子 :
    git branch / git branch -a


## 切换分支

### git checkout 

    语法 :
    git checkout branchName 

    例子 :
    git checkout shanshan

## 发布分支

### git push origin (将本地分支发布到远端)

    语法 :
    git push origin branchName 

    例子 :
    git push origin shanshan

## 拉取远端分支

    语法 :
    git pull origin branchName

    例子 :
    git pull origin shanshan

## 删除本地分支

### git branch -d 

    语法 :
    git branch -d branchName

    例子 :
    git branch -d shanshan

## 删除远端分支

### git push origin :

    语法 :
    git push origin :branchName

    例子 :
    git push origin :shanshan

## 合并分支

### git merge

    语法 :
    git merge branchName

    例子 :
    git merge shanshan  (need git checkout master)

# 冲突的解决

## push失败

1.可能是 
    本地仓库不是最新的需要pull一下去拉取远端的更新

2.还可能是 

    你和你的同事修改了同一个文件夹的同一行代码 机器不知道 选择谁的保存下来需要人工合并。

    git pull 然后找到起冲突的文件修改合并

    git add .

    git commit -m "合并"

    git push

# 不使用分支的多人合作

    利用master 进行多人合作开发 也是可以的
    分别新建或者修改不同的文件或者文件夹来进行多人合作开发
    流程是
    git add .
    git commit -m ''
    git push   ------如果失败先pull 一下

    :wq 是保存并退出的意思(在输入:的时候记得要用英文 不然没有效果)

# git 的三个区    

    工作区
    暂存区
    版本库（本地版本库 远端版本库）

    ·新建一个文件默认就是在工作区

    ·通过git add 命令 将文件添加到暂存区  

    例子: git add index.html

    ·通过git commit -m "" 命令将文件添加到本地版本库 

    例子: git commit -m "我新建了一个主页"

    ·通过git push 命令将文件上传到远端仓库也就是远端版本库  
    
    例子: git push

    注意：
    如果你的文件特别多 不需要一个一个的 git add 
    可以通过 git add . 来一次性添加 . 就是匹配所有的意思