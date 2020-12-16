# 软件安装
[[toc]]

## Nginx安装

### 0.资源查看
[nginx](https://nginx.org/download/) <Badge text="nginx"/>
```shell script
https://nginx.org/download/
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
