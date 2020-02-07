# 用户设置
- 添加用户  
`adduser l1nkkk`
- 设置sudoer  
`vim /etc/sudoers`加入  
l1nkkk  ALL=(ALL)       ALL
- 将用户添加到docker组  
`usermod -a -G docker l1nkkk`
# go环境
`wget https://dl.google.com/go/go1.13.7.linux-amd64.tar.gz`  
`tar -xzvf go1.13.7.linux-amd64.tar.gz /usr/local`  
