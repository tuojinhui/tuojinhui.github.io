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
Description=frps service
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

```shell script
systemctl start frps
```

## 清除jetbrains适用信息

mac || linux, 新建 reset_jetbrains_eval_mac_linux.sh

```shell script

#!/bin/sh
# reset jetbrains ide evals

OS_NAME=$(uname -s)
JB_PRODUCTS="IntelliJIdea CLion PhpStorm GoLand PyCharm WebStorm Rider DataGrip RubyMine AppCode"

if [ $OS_NAME == "Darwin" ]; then
	echo 'macOS:'

	for PRD in $JB_PRODUCTS; do
    	rm -rf ~/Library/Preferences/${PRD}*/eval
    	rm -rf ~/Library/Application\ Support/JetBrains/${PRD}*/eval
	done
elif [ $OS_NAME == "Linux" ]; then
	echo 'Linux:'

	for PRD in $JB_PRODUCTS; do
    	rm -rf ~/.${PRD}*/config/eval
    	rm -rf ~/.config/${PRD}*/eval
	done
else
	echo 'unsupport'
	exit
fi

echo 'done.'

```

windows 新建 reset_jetbrains_eval_windows.vbs
```shell script

Set oShell = CreateObject("WScript.Shell")
Set oFS = CreateObject("Scripting.FileSystemObject")
sHomeFolder = oShell.ExpandEnvironmentStrings("%USERPROFILE%")
sJBDataFolder = oShell.ExpandEnvironmentStrings("%APPDATA%") + "\JetBrains"

Set re = New RegExp
re.Global     = True
re.IgnoreCase = True
re.Pattern    = "\.?(IntelliJIdea|GoLand|CLion|PyCharm|DataGrip|RubyMine|AppCode|PhpStorm|WebStorm|Rider).*"

Sub removeEval(ByVal file, ByVal sEvalPath)
	bMatch = re.Test(file.Name)
    If Not bMatch Then
		Exit Sub
	End If

	If oFS.FolderExists(sEvalPath) Then
		oFS.DeleteFolder sEvalPath, True 
	End If
End Sub

If oFS.FolderExists(sHomeFolder) Then
	For Each oFile In oFS.GetFolder(sHomeFolder).SubFolders
    	removeEval oFile, sHomeFolder + "\" + oFile.Name + "\config\eval"
	Next
End If

If oFS.FolderExists(sJBDataFolder) Then
	For Each oFile In oFS.GetFolder(sJBDataFolder).SubFolders
	    removeEval oFile, sJBDataFolder + "\" + oFile.Name + "\eval"
	Next
End If

MsgBox "done"

```