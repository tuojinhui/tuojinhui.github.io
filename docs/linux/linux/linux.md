# Linux知识记录
[[toc]]


## Systemctl启动自定义命令

进入/usr/lib/systemd/system目录
```linux
cd /usr/lib/systemd/system 
```
创建并配置frps.service文件
```linux
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
```linux
systemctl daemon-reload
```