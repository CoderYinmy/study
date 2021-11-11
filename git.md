b# mac 下配置多个 git 账户
git config --global --unset user.name
git config --global --unset user.email

git config --global user.name
git config --global user.email

cd ~/.ssh

### 生成公钥

ssh-keygen -t rsa -C '邮箱'

> Generating public/private rsa key pair.</br>
> Enter file in which to save the key (/Users/liugui/.ssh/id_rsa):/Users/liugui/.ssh/id_rsa_github

按照同样的步骤生成 id_rsa_gitee 的秘钥对

### 私钥添加到本地

ssh-add ~/.ssh/id_rsa_github
ssh-add ~/.ssh/id_rsa_gitee
ssh-add -l

### 本地密钥配置

touch config 在 ssh 创建一个 config 文件

文件内容：
Host github // 网站的别名，随意取
HostName github.com // 托管网站的域名
user yinmengyao // 托管网站上的用户名
IdentityFile ~/.ssh/id_rsa_github // 使用的密钥文件

Host gitee
HostName gitee.com
user yinmengyao
IdentityFile ~/.ssh/id_rsa_gitee

### 公钥托管至网站

cat id_rsa_github.pub //查看公钥
cat id_rsa_gitee.pub //查看公钥

### 测试是否添加成功

ssh -T git@github.com
ssh -T git@gitee.com
