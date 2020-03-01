- [用户设置](#%E7%94%A8%E6%88%B7%E8%AE%BE%E7%BD%AE)
- [go环境](#go%E7%8E%AF%E5%A2%83)
- [etcd镜像](#etcd%E9%95%9C%E5%83%8F)
  - [构建](#%E6%9E%84%E5%BB%BA)
  - [启动](#%E5%90%AF%E5%8A%A8)
- [mongodb镜像](#mongodb%E9%95%9C%E5%83%8F)
  - [应用启动（不使用docker时）](#%E5%BA%94%E7%94%A8%E5%90%AF%E5%8A%A8%E4%B8%8D%E4%BD%BF%E7%94%A8docker%E6%97%B6)
- [apiserver镜像](#apiserver%E9%95%9C%E5%83%8F)
- [master](#master)
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

# etcd镜像
> etcd+docker：https://www.artacode.com/posts/etcd/install/  
> etcd使用：https://www.hi-linux.com/posts/40915.html
> etcd使用：https://yq.aliyun.com/articles/623228

## 构建
`l1nkkk@iZ2zebcdgh4e5liei40rzhZ:~/etcdDocker$ cp ../etcd-v3.3.10-linux-amd64/etcdctl  ./`    
`l1nkkk@iZ2zebcdgh4e5liei40rzhZ:~/etcdDocker$ cp ../etcd-v3.3.10-linux-amd64/etcd  ./`

- Dockerfile
```Dockerfile
FROM ubuntu:latest

ADD etcd /usr/local/bin/
ADD etcdctl /usr/local/bin/
RUN mkdir -p /var/etcd/
RUN mkdir -p /var/lib/etcd/

# Alpine Linux doesn't use pam, which means that there is no /etc/nsswitch.conf,
# but Golang relies on /etc/nsswitch.conf to check the order of DNS resolving
# (see https://github.com/golang/go/commit/9dee7771f561cf6aee081c0af6658cc81fac3918)
# To fix this we just create /etc/nsswitch.conf and add the following line:
RUN echo 'hosts: files mdns4_minimal [NOTFOUND=return] dns mdns4' >> /etc/nsswitch.conf

EXPOSE 2379 2380

# Define default command.
CMD ["/usr/local/bin/etcd"]
```

- 构建etcd docker  
> 遇到：Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?  
> 解决：service docker start启动docker
`sudo docker build -t etcd .`  


--tag, -t: 镜像的名字及标签，通常 name:tag 或者 name 格式；可以在一次构建中为一个镜像设置多个标签。
- 验证  
`docker images`

## 启动
`docker run -d --net=host -p 2379:2379 --name etcd-master ubuntu-etcd   /usr/local/bin/etcd --listen-client-urls 'http://0.0.0.0:2379' --advertise-client-urls 'http://0.0.0.0:2379'`


- 查看docker容器信息  
  `docker inspect `

# mongodb镜像
## 应用启动（不使用docker时）
> https://blog.csdn.net/xingzishuai/article/details/82016141  
`nohup mongod --dbpath=/home/l1nkkk/mongodb_data --bind-ip=0.0.0.0 &`


# apiserver镜像

```Dockerfile
FROM ubuntu:latest
RUN mkdir /opt/apidoc
ADD apidoc /opt/apidoc
EXPOSE 8888
CMD ["/opt/apidoc/apiserver", "-webroot", "/opt/apidoc/"]
```
**构建：**  
`sudo docker build -t apidoc_v1 .`

**运行：**  
`docker run  --net=host -p 8888:8888 --name apiserver -d  apidoc_v1 `

# master 



