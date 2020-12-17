# 软件安装
[[toc]]

## Nginx安装

### 0.资源查看
[nginx](https://nginx.org/download/) <Badge text="nginx"/>
```shell script
https://nginx.org/download/
```

### 1.选定源码目录
    可以是任何目录，本文选定的是/usr/local/src

### 2.安装PCRE库
     https://ftp.pcre.org/pub/pcre/ 下载最新的 PCRE 源码包，使用下面命令下载编译和安装 PCRE 包：
```shell script
    cd /usr/local/src
    wget https://ftp.pcre.org/pub/pcre/pcre-8.44.tar.gz 
    tar -zxvf pcre-8.44.tar.gz
    cd pcre-8.44
    ./configure
    make
    make install
```
### 3.安装zlib库
     http://zlib.net/zlib-1.2.11.tar.gz 下载最新的 zlib 源码包，使用下面命令下载编译和安装 zlib包：

```shell script
    cd /usr/local/src
    wget http://zlib.net/zlib-1.2.11.tar.gz
    tar -zxvf zlib-1.2.11.tar.gz
    cd zlib-1.2.11
    ./configure
    make
    make install
```
### 4.安装ssl（某些vps默认没装ssl)
```shell script
    cd /usr/local/src
    wget https://www.openssl.org/source/openssl-1.1.1g.tar.gz
    tar -zxvf openssl-1.1.1g.tar.gz
```

### 安装nginx
    Nginx 一般有两个版本，分别是稳定版和开发版，您可以根据您的目的来选择这两个版本的其中一个，
    下面是把 Nginx 安装到 /usr/local/nginx 目录下的详细步骤：
    
```shell script
    cd /usr/local/src
    wget http://nginx.org/download/nginx-1.18.0.tar.gz
    tar -zxvf nginx-1.18.0.tar.gz
    cd nginx-1.18.0
     
    ./configure --sbin-path=/usr/local/nginx/nginx \
    --conf-path=/usr/local/nginx/nginx.conf \
    --pid-path=/usr/local/nginx/nginx.pid \
    --with-http_gzip_static_module \
    --with-http_stub_status_module \
    --with-file-aio \
    --with-http_realip_module \
    --with-http_ssl_module \
    --with-pcre=/usr/local/src/pcre-8.44 \
    --with-zlib=/usr/local/src/zlib-1.2.11 \
    --with-openssl=/usr/local/src/openssl-1.1.1g
     
    make -j2
    make install
```



### 1.进入目录
```shell script
mkdir -p /opt && cd /opt
```

### 2.下载软件
```shell script
wget https://nginx.org/download/nginx-1.9.9.tar.gz
```

### 3.解压软件
```shell script
wget https://nginx.org/download/nginx-1.9.9.tar.gz
```



## Node安装

### 0.资源查看
[nodejs](https://nodejs.org/dist/) <Badge text="nodejs"/>
```shell script
https://nodejs.org/dist/
```

### 1.进入目录
```shell script
mkdir -p /opt && cd /opt
```

### 2.下载软件
```shell script
wget https://nodejs.org/dist/v10.16.0/node-v10.16.0-linux-x64.tar.xz
```

### 3.解压软件
```shell script
mkdir ./node-v10.16.0 && tar -xf node-v10.16.0-linux-x64.tar.xz -C ./node-v10.16.0 --strip-components 1
```

### 4.设置全局
```shell script
echo 'export PATH=$PATH:/opt/node-v10.16.0/bin' >> /etc/profile
```

### 5.立即生效
```shell script
source /etc/profile
```

### 6.指令测试
```shell script
[root@iZuf6hyj00tfq6qs8i8ez1Z ~]# cd /
[root@iZuf6hyj00tfq6qs8i8ez1Z /]# node -v
v10.16.0
[root@iZuf6hyj00tfq6qs8i8ez1Z /]# npm -v
6.9.0
```


###

::: warning

 1.通过cnpm使用淘宝镜像：
 
 npm install -g cnpm --registry=https://registry.npm.taobao.org
 2.将npm设置为淘宝镜像：
 
 npm config set registry https://registry.npm.taobao.org
 3. 查看npm镜像设置：
 
 npm config get registry 
 4.查看cnpm镜像设置：
 
 cnpm config get registry 
   
:::
