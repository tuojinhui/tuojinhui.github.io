# 信息整理
[[toc]]


## Systemctl设置自定义命令启动

进入systemd service目录

```shell
cd /usr/lib/systemd/system 
```

创建并配置frps.service文件

```shell
[Unit]
Description=fras service
After=network.target syslog.target
Wants=network.target

[Service]
Type=simple
ExecStart=/opt/frp_0.37.1_linux_amd64/frps -c /opt/frp_0.37.1_linux_amd64/frps.ini

[Install]
WantedBy=multi-user.target
```

重新加载配置

```shell
systemctl daemon-reload
```

Systemctl启动frps

```shell
systemctl start frps
```