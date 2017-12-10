# Git 是用来做合作开发以及版本管理的工具他的同类产品还有svn等


这次课程我们需要：

  1.GitHub帐号  (http://www.github.com/)
    注册github账号
    激活邮箱

  2.本地安装git
    去git官网下载git 
    安装


# 目标

  创建本地远端同步仓库 实现 提交 拉取 操作的练习


# 步骤：（在本地 新建一个空文件夹 克隆远端仓库）


## 1新建文件夹 

  1.打开本地git (右击鼠标点击Git Bash Here)
  2.cd 到这个文件夹
  3.之后准备克隆远端仓库 (等待后续操作完成再回过头来克隆) wating...


## 2连接github

  通过ssh连接 


### 1)

  $ ssh-keygen -t rsa -C "yourEmail@yourEmail.com" 可以一路回车新建ssh key


### 2)

  将ssh可以写入github  
  找到 ssh 
  C:\Users\Administrator\.ssh  下面的id_rsa.pub  用sublime 打开 复制一下
  打开github 登录你的的账户 找到 settings –> SSH and GPG keys -> new SSH keys -> 填写title 和 粘贴你已经复制好的 ssh key –> Add SSH key


### 3)

验证是否连接成功
  $ ssh -T git@github.com

  如果 SSH and GPG keys 里面的钥匙由黑灰色变为了绿色就 说明能够正常连接 否则不能正常连接上github


## 3.新建远程仓库: 

  https://github.com/new

填写 

  Repository name
  Description

选择

  · Public

勾选

  √ Initialize this repository with a README  

好wating完毕


## 4.在git命令行克隆这个远端仓库 git clone  git@github.com:PsChinaTest/gitTest.git

  这个地址来自： 
  打开github 登录你的的账户 找到 Your repositories -> 你要克隆的仓库 -> clone or download


# 命令


## git clone (克隆远端仓库)

语法 :

  git clone yourRepositoriesAddress(ssh/https) 

例子 :

  git clone git@github.com:PsChina/angularJS.git


## git add (将工作区的文件添加到暂存区)

语法 :

  git add yourfileNameExp

例子 :

  git add index.html

  git add .            

. 是正则表达式 意思是匹配所有文件


## git commit (将暂存区的文件提交到本地版本库)

语法 :

  git commit -m '描述你提交的内容'

例子 :

  git commit -m '修复了某某bug/新建了XX文件'


## git push (将本地版本库的文件提交到远端版本库)

语法 :

  git push

例子 :

  git push

##  git checkout -b 

创建分支并切换分支


## git pull (拉取远端仓库的更新)

语法 :

  git pull

例子 :

  git pull

## git reset HEAD (撤销 git add XXX)

当你把 node_modules 误加到暂存区的时候 可以使用 git reset HEAD 撤销

## git reset commit_id (撤销 git commit -m XXX)

当你 发生一个错误的 git commit 的时候想要撤销可以用 git reset commit_id (其中commit\_id可以通过 git log 查看)

## 特别注意：git 和 github 的区别

Git 是一个工具  它可以搭建github这样的全球性的仓库 也可以搭建公司内网的仓库

Github 就是用git 搭建的全球性的开源版本库


## 配置你的用户名和email

  git config --global user.name "Your Name"

  git config --global user.email you@example.com


#### 其他知识点

git push 和 git push origin 的区别


  git push origin

上面命令表示，将当前分支推送到origin主机的对应分支。
如果当前分支只有一个追踪分支，那么主机名都可以省略。


  git push

如果当前分支与多个主机存在追踪关系，那么这个时候 -u选项会 指定一个默认主机，这样后面就可以不加任何参数使用
 
  git push。


  git push -u origin master

上面命令将本地的master分支推送到origin主机，同时指定origin为默认主机，后面就可以不加任何参数使用git push了。
不带任何参数的git push，默认只推送当前分支，这叫做simple方式。此外，还有一种matching方式，会推送所有有对应的远程分支的本地分支。Git 2.0版本之前，默认采用matching方法，现在改为默认采用simple方式。