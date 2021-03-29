# 软件安装
[[toc]]


## 资源查看(HUAWEICLOUD)
[jdk](https://mirrors.huaweicloud.com/java/jdk/)
[maven](https://mirrors.huaweicloud.com/apache/maven/maven-3/)
[tomcat](https://mirrors.huaweicloud.com/apache/tomcat/)
[nodejs](https://mirrors.huaweicloud.com/nodejs/)
[nginx](https://mirrors.huaweicloud.com/nginx/)
[mysql](https://mirrors.huaweicloud.com/mysql/)
[redis](https://mirrors.huaweicloud.com/redis/)
[docker](https://mirrors.huaweicloud.com/docker-ce/)
[jenkins](https://mirrors.huaweicloud.com/jenkins/)

<Badge text="Git"/> <Badge text="SonarQube"/> <Badge text="CheckStyle"/>

## JDK安装
```shell script
mkdir -p /opt && cd /opt

wget https://mirrors.huaweicloud.com/java/jdk/8u202-b08/jdk-8u202-linux-x64.tar.gz

mkdir -p ./jdk1.8.0_202 && tar -zxvf jdk-8u202-linux-x64.tar.gz -C ./jdk1.8.0_202 --strip-components 1

vim /etc/profile
export JAVA_HOME=/opt/jdk1.8.0_202
export PATH=$PATH:$JAVA_HOME/bin
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar

source /etc/profile

java -version
```


## MAVEN安装
```shell script
mkdir -p /opt && cd /opt

wget https://mirrors.huaweicloud.com/apache/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz

mkdir -p ./apache-maven-3.6.3 && tar -zxvf apache-maven-3.6.3-bin.tar.gz -C ./apache-maven-3.6.3 --strip-components 1

vim /etc/profile
export MAVEN_HOME=/opt/apache-maven-3.6.3
export PATH=$PATH:$MAVEN_HOME/bin

source /etc/profile

mvn -version
```
::: warning

 设置MAVEN镜像：
       
       https://developer.aliyun.com/mirror/maven
       
       <mirror>
           <id>aliyunmaven</id>
           <mirrorOf>*</mirrorOf>
           <name>阿里云公共仓库</name>
           <url>https://maven.aliyun.com/repository/public</url>
       </mirror>

:::

## NODE安装
```shell script
mkdir -p /opt && cd /opt

wget https://mirrors.huaweicloud.com/nodejs/v10.16.0/node-v10.16.0-linux-x64.tar.gz

mkdir -p ./node-v10.16.0 && tar -xf node-v10.16.0-linux-x64.tar.xz -C ./node-v10.16.0 --strip-components 1

vim /etc/profile
export PATH=$PATH:/opt/node-v10.16.0/bin

source /etc/profile

node -v
npm -v
```
::: warning

 1.通过cnpm使用淘宝镜像：
 <br/>
 
    npm install -g cnpm --registry=https://registry.npm.taobao.org
 <br/>
 
 2.将npm设置为淘宝镜像：
 <br/>
 
    npm config set registry https://registry.npm.taobao.org
 <br/>
 
 3.查看npm镜像设置：
 <br/>
 
    npm config get registry
 <br/>
 
 4.查看cnpm镜像设置：
 <br/>
 
    cnpm config get registry 
 <br/>
   
:::

## TOMCAT安装

## MYSQL安装

## REDIS安装

## GIT安装
```shell script
yum install git -y

git --version
```

## DOCKER安装

## JENKINS安装

```shell script
    
    #!bin/bash
    
    oldPid=`pgrep -f "java.*${1}"`
    
    if [ -n "${oldPid}" ];then
       echo "正在杀死该服务原有进程,进程ID为:${oldPid}"
       kill -9 "${oldPid}"
       echo "该服务原有进程已杀死"
    fi
    
    source /etc/profile

    ## 指令暂停一秒
    sleep 1s
    
    cd /data/app/
    
    ## 最小/最大堆大小
    nohup java -Xms500m -Xmx1024m  -jar "$1".jar >./logs/"$1".out 2>&1 &

    ## 指令暂停三秒
    sleep 3s
    
    newPid=`pgrep -f "java.*${1}"`
    
    if [ -n "${newPid}" ];then
            echo "该服务新的进程ID为:${newPid}"
        echo "该服务启动成功"
    else
            echo "该服务新的进程ID为空"
        echo "该服务启动失败"
    fi
    
    if [ -n "${newPid}" ];then
            echo  "
      _____ _    _  _____ _____ ______  _____ _____ 
     / ____| |  | |/ ____/ ____|  ____|/ ____/ ____|
    | (___ | |  | | |   | |    | |__  | (___| (___  
     \___ \| |  | | |   | |    |  __|  \___ \\___ \ 
     ____) | |__| | |___| |____| |____ ____) |___) |
    |_____/ \____/ \_____\_____|______|_____/_____/ 
    "
    else
            echo " 
      ______     ______ _     _    _ _____  ______ 
     |  ____/\   |_   _| |   | |  | |  __ \|  ____|
     | |__ /  \    | | | |   | |  | | |__) | |__   
     |  __/ /\ \   | | | |   | |  | |  _  /|  __|  
     | | / ____ \ _| |_| |___| |__| | | \ \| |____ 
     |_|/_/    \_|_____|______\____/|_|  \_|______|
    "
    fi

```

## NGINX安装

### 1.选定源码目录
    Nginx 一般有两个版本，分别是稳定版和开发版，您可以根据您的目的来选择这两个版本的其中一个，
    下面是把 Nginx 安装到 /opt 目录下的详细步骤：

### 2.安装PCRE库

    https://ftp.pcre.org/pub/pcre/ 下载最新的 PCRE 源码包，使用下面命令下载编译和安装 PCRE 包：
     
```shell script
    cd /opt
    wget https://ftp.pcre.org/pub/pcre/pcre-8.44.tar.gz 
    tar -zxvf pcre-8.44.tar.gz
    cd pcre-8.44
    ./configure
    make
    make install
```
### 3.安装ZLIB库

     http://zlib.net/zlib-1.2.11.tar.gz 下载最新的 ZLIB 源码包，使用下面命令下载编译和安装 ZLIB 包：

```shell script
    cd /opt
    wget http://zlib.net/zlib-1.2.11.tar.gz
    tar -zxvf zlib-1.2.11.tar.gz
    cd zlib-1.2.11
    ./configure
    make
    make install
```
### 4.安装SSL库

    https://www.openssl.org/source/openssl-1.1.1g.tar.gz 下载最新的 OPENSSL 源码包，使用下面命令下载编译和安装 OPENSSL 包：

```shell script
    cd /opt
    wget https://www.openssl.org/source/openssl-1.1.1g.tar.gz
    tar -zxvf openssl-1.1.1g.tar.gz
    cd openssl-1.1.1g
    ./configure
    make
    make install
```

### 5.安装NGINX
```shell script
    cd /opt
    wget https://mirrors.huaweicloud.com/nginx/nginx-1.9.9.tar.gz
    tar -zxvf nginx-1.18.0.tar.gz
    cd nginx-1.18.0
     
    ./configure --sbin-path=/opt/nginx/nginx \
    --conf-path=/opt/nginx/nginx.conf \
    --pid-path=/opt/nginx/nginx.pid \
    --with-http_gzip_static_module \
    --with-http_stub_status_module \
    --with-file-aio \
    --with-http_realip_module \
    --with-http_ssl_module \
    --with-pcre=/opt/pcre-8.44 \
    --with-zlib=/opt/zlib-1.2.11 \
    --with-openssl=/opt/openssl-1.1.1g
     
    make -j2
    make install
```

