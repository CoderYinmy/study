# my-vue-pro

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Git
SSH  密钥
cd ~/ .ssh    
ls     
rm -rf id_rsa  
rm -rf id_rsa.pub   
ssh-keygen -t rsa -b 4096 -C "2798816053@qq.com"    
cat id_rsa.pub

Git 提交
git init 初始化仓库
git add .  添加
git commit -m "commit" 提交命名
git remote add origin '地址' 添加仓库地址
git push origin master 提交

### vue搭建
npm install -g @vue/cli
mkdir ’文件名‘
vue create ’项目名‘
cd 文件名
npm run serve