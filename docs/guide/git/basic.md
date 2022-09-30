# Git 基础使用

## 下载

- [Windows版本](https://git-scm.com/downloads)
- Linux


<!--
## 下载

- [Windows版本](https://git-scm.com/downloads)
- Linux

```shell
sudo apt-get install git
```

## 修改配置信息

```shell
git config --global user.name "Your name"
git config --global user.email "Your email"
```

## 简单使用

```shell
// 选择一个目录,初始化仓库
git init

// 添加文件
git add 文件名/ . 代表所有文件

// 提交仓库
git commit -m "desc"

// 查看当前状态
git status

// 查看修改文件
git diff 文件名

// 查看提交日志, 显示从近到远的提交日志
git log
git log --pretty=oneline // 显示一行

// 回退版本
git reset --hard HEAD^

// 显示记录使用的每一次命令
git reflog

// 查看工作区和版本库里面最新版本的比较
git diff HEAD -- 文件名
``` -->

## 工作区与暂存区

- 开发目录为工作区
- 其中的 .git (版本库)
   - stage  暂存区
   - master 自动创建的主分支
   - HEAD   指向master的指针

```shell
git add     // 添加到暂存区
git commit  // 提交到当前分支
```

> 简单理解: 需要提交的文件先放暂存区, 然后一次性提交暂存区的修改到分支


- git跟踪管理的是修改

> 理解: 就是git跟踪管理的是每次 git add 到暂存区的文件


- git checkout -- 文件的两种情况
   - 文件自然修改未添加到“暂存区”,则撤销到回版本库状态
   - 文件添加到“暂存区”,则撤销到提交前的状态

> -- 如忘记,则会变成切换分支


- git 中的删除
   - 通常情况下删除也是一个修改,有以下两个选项
      - git rm 文件, 从版本库中删除该文件,不能恢复
      - git commit 提交这次修改

## 远程仓库

- 对接 github
   1. 创建 SSH key
```shell
ssh-keygen -t rsa -C "youremail";

// 然后一路回车, 在用户目录下会生成 .ssh 目录
// 有 id_rsa, id_rsa.pub 两个文件
```

   1. 登录 GitHub 打开 " Account settings" "SSH keys" 中, "Add SSH Keys"
- Github 与 本地仓库关联

```shell
// origin: git远程库的默认叫法
git remote add origin git@github....git

// 提交本地库推送到远程库
// 加上 -u 参数, 会将本地的master分支内容不仅推送到远程新的 master 分支, 还会与之关联, 后面推送和拉取时可以简化命令
git push -u origin master
```

- 远程克隆

```shell
git clone ....git
```

## 分支管理

如准备开发一个新功能,第一周写了50%的代码,如果立刻提交,由于代码没有写完,完整的代码会导致别人不能干活了,如等代码全部写完再一次提交,又存在丢失每天进度的巨大风险。

而使用分支,则可以创建一个属于自己的分支

```shell
// 创建分支 -b 表示创建并切换
git checkout -b 分支名称

// 等同于下方两条命令
git branch 分支名称
git checkount 分支名称

// 罗列出当前本地所有分支，当前分支（*）
git branch

// 查看远程分支
git branch -a

// 合并分支：指定分支合并到当前分支
git merge 分支名称

// 删除分支
git branch -d 分支名称

// 新版本切换命令
// 切换到新的分支
git switch -c 分支名称

// 切换到已有分支
git switch 分支名称
```

> 因为创建、合并、删除分支非常快，所以建议使用分支完成某项功能再进行合并，合并后在删除分支


> git 合并分支时，会默认使用 Fast forward 模式, 这种模式下合并分支、删除分支会丢掉分支信息，所以可通过以下命令进行合并，保留合并记录


```shell
// 通过这种模式是新建一个 commit 所以要加描述
git merge --no-ff -m "desc" 分支名称
```

- BUG 分支
当在一个分支上进行到一半时，需要新建一个分支解决BUG,那么可通过以下命令清空且隐藏当前工作区

```shell
// 隐藏当前工作区
git stash

// 查看所有隐藏
git stash list

// 恢复工作区
git stash apply

// 删除记录
git stash drop

// 恢复并删除
git stash pop
```

- 如何将其他分支上修改的bug，引入到当前我开发的分支进行修复当前bug
-


```shell
// 复制一个特定的提交到当前分支
git cherry-pick  4c805e2

// 强行删除一个未合并的分支
git branch -D 分支名
```

## 多人协作

```shell
// 查看远程库信息
git remote

// 查看更详细信息
git remote -v

// 推送分支
git push origin master

// 默认克隆下来只有 master 分支，通过下方关联 dev分支
git checkout -b dev origin/dev

// 设置本地分支与远程分支连接
git branch --set-upstream branch-name origin/branch-name

// 大概多人协作的工作模式
1. git push origin 分支名 尝试能否推送
2. git pull 如远程更新,则更新本地
3. git push origin 分支名 解决冲突，提交推送

// 把本地未push的分叉提交历史整理成直线；
git rebase
```

## 标签管理

```shell
// 查看所有标签
git tag

// 新建一个标签，默认为HEAD,也可以指定一个commit id；
git tab 标签名

// 可以指定标签信息；
git tag -a <tagname> -m "blablabla..."

// 删除标签
git tag -d v0.1

// 推送远程
git push origin <tagname>

// 一次性推送全部
git push origin --tags

// 删除已经推送的标签
git tag -d v0.9
git push origin :refs/tags/v0.9
```

## 自定义Git

```shell
// 让Git显示颜色，会让命令输出看起来更醒目
git config --global color.ui true

// 定义忽略文件
创建 .gitignore 文件, 在线规则配置 https://github.com/github/gitignore

// 添加一个被忽略的文件
git add -f App.class

// 检查文件被哪条规则忽略了
git check-ignore -v App.class

// 配置别名
// 敲git st就表示git status那就简单多了
// 当然还有别的命令可以简写，很多人都用co表示checkout，ci表示commit，br表示branch：
git config --global alias.st status
```
