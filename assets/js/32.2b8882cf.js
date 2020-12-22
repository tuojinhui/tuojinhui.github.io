(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{520:function(t,a,s){"use strict";s.r(a);var n=s(31),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"软件安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#软件安装"}},[t._v("#")]),t._v(" 软件安装")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#资源查看-huaweicloud"}},[t._v("资源查看(HUAWEICLOUD)")])]),s("li",[s("a",{attrs:{href:"#jdk安装"}},[t._v("JDK安装")])]),s("li",[s("a",{attrs:{href:"#maven安装"}},[t._v("MAVEN安装")])]),s("li",[s("a",{attrs:{href:"#node安装"}},[t._v("NODE安装")])]),s("li",[s("a",{attrs:{href:"#tomcat安装"}},[t._v("TOMCAT安装")])]),s("li",[s("a",{attrs:{href:"#mysql安装"}},[t._v("MYSQL安装")])]),s("li",[s("a",{attrs:{href:"#redis安装"}},[t._v("REDIS安装")])]),s("li",[s("a",{attrs:{href:"#git安装"}},[t._v("GIT安装")])]),s("li",[s("a",{attrs:{href:"#docker安装"}},[t._v("DOCKER安装")])]),s("li",[s("a",{attrs:{href:"#jenkins安装"}},[t._v("JENKINS安装")])]),s("li",[s("a",{attrs:{href:"#nginx安装"}},[t._v("NGINX安装")]),s("ul",[s("li",[s("a",{attrs:{href:"#_1-选定源码目录"}},[t._v("1.选定源码目录")])]),s("li",[s("a",{attrs:{href:"#_2-安装pcre库"}},[t._v("2.安装PCRE库")])]),s("li",[s("a",{attrs:{href:"#_3-安装zlib库"}},[t._v("3.安装ZLIB库")])]),s("li",[s("a",{attrs:{href:"#_4-安装ssl库"}},[t._v("4.安装SSL库")])]),s("li",[s("a",{attrs:{href:"#_5-安装nginx"}},[t._v("5.安装NGINX")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"资源查看-huaweicloud"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源查看-huaweicloud"}},[t._v("#")]),t._v(" 资源查看(HUAWEICLOUD)")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://mirrors.huaweicloud.com/java/jdk/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jdk"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://mirrors.huaweicloud.com/apache/maven/maven-3/",target:"_blank",rel:"noopener noreferrer"}},[t._v("maven"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://mirrors.huaweicloud.com/apache/tomcat/",target:"_blank",rel:"noopener noreferrer"}},[t._v("tomcat"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://mirrors.huaweicloud.com/nodejs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("nodejs"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://mirrors.huaweicloud.com/nginx/",target:"_blank",rel:"noopener noreferrer"}},[t._v("nginx"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://mirrors.huaweicloud.com/mysql/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mysql"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://mirrors.huaweicloud.com/redis/",target:"_blank",rel:"noopener noreferrer"}},[t._v("redis"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://mirrors.huaweicloud.com/docker-ce/",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://mirrors.huaweicloud.com/jenkins/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jenkins"),s("OutboundLink")],1)]),t._v(" "),s("Badge",{attrs:{text:"Git"}}),t._v(" "),s("Badge",{attrs:{text:"SonarQube"}}),t._v(" "),s("Badge",{attrs:{text:"CheckStyle"}}),t._v(" "),s("h2",{attrs:{id:"jdk安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jdk安装"}},[t._v("#")]),t._v(" JDK安装")]),t._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /opt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /opt\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://mirrors.huaweicloud.com/java/jdk/8u202-b08/jdk-8u202-linux-x64.tar.gz\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p ./jdk1.8.0_202 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zxvf jdk-8u202-linux-x64.tar.gz -C ./jdk1.8.0_202 --strip-components "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/profile\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("JAVA_HOME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/opt/jdk1.8.0_202\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$JAVA_HOME")]),t._v("/bin\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("CLASSPATH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(".:"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$JAVA_HOME")]),t._v("/lib/dt.jar:"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$JAVA_HOME")]),t._v("/lib/tools.jar\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" /etc/profile\n\njava -version\n")])])]),s("h2",{attrs:{id:"maven安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maven安装"}},[t._v("#")]),t._v(" MAVEN安装")]),t._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /opt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /opt\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://mirrors.huaweicloud.com/apache/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p ./apache-maven-3.6.3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zxvf apache-maven-3.6.3-bin.tar.gz -C ./apache-maven-3.6.3 --strip-components "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/profile\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MAVEN_HOME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/opt/apache-maven-3.6.3\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$MAVEN_HOME")]),t._v("/bin\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" /etc/profile\n\nmvn -version\n")])])]),s("h2",{attrs:{id:"node安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node安装"}},[t._v("#")]),t._v(" NODE安装")]),t._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /opt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /opt\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://mirrors.huaweicloud.com/nodejs/v10.16.0/node-v10.16.0-linux-x64.tar.gz\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p ./node-v10.16.0 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -xf node-v10.16.0-linux-x64.tar.xz -C ./node-v10.16.0 --strip-components "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/profile\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),t._v(":/opt/node-v10.16.0/bin\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" /etc/profile\n\nnode -v\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" -v\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("1.通过cnpm使用淘宝镜像：")]),t._v(" "),s("p",[t._v("npm install -g cnpm --registry=https://registry.npm.taobao.org\n2.将npm设置为淘宝镜像：")]),t._v(" "),s("p",[t._v("npm config set registry https://registry.npm.taobao.org\n3. 查看npm镜像设置：")]),t._v(" "),s("p",[t._v("npm config get registry\n4.查看cnpm镜像设置：")]),t._v(" "),s("p",[t._v("cnpm config get registry")])]),t._v(" "),s("h2",{attrs:{id:"tomcat安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tomcat安装"}},[t._v("#")]),t._v(" TOMCAT安装")]),t._v(" "),s("h2",{attrs:{id:"mysql安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql安装"}},[t._v("#")]),t._v(" MYSQL安装")]),t._v(" "),s("h2",{attrs:{id:"redis安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis安装"}},[t._v("#")]),t._v(" REDIS安装")]),t._v(" "),s("h2",{attrs:{id:"git安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git安装"}},[t._v("#")]),t._v(" GIT安装")]),t._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" -y\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" --version\n")])])]),s("h2",{attrs:{id:"docker安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker安装"}},[t._v("#")]),t._v(" DOCKER安装")]),t._v(" "),s("h2",{attrs:{id:"jenkins安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jenkins安装"}},[t._v("#")]),t._v(" JENKINS安装")]),t._v(" "),s("h2",{attrs:{id:"nginx安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx安装"}},[t._v("#")]),t._v(" NGINX安装")]),t._v(" "),s("h3",{attrs:{id:"_1-选定源码目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-选定源码目录"}},[t._v("#")]),t._v(" 1.选定源码目录")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("Nginx 一般有两个版本，分别是稳定版和开发版，您可以根据您的目的来选择这两个版本的其中一个，\n下面是把 Nginx 安装到 /opt 目录下的详细步骤：\n")])])]),s("h3",{attrs:{id:"_2-安装pcre库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装pcre库"}},[t._v("#")]),t._v(" 2.安装PCRE库")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("https://ftp.pcre.org/pub/pcre/ 下载最新的 PCRE 源码包，使用下面命令下载编译和安装 PCRE 包：\n")])])]),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /opt\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://ftp.pcre.org/pub/pcre/pcre-8.44.tar.gz \n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zxvf pcre-8.44.tar.gz\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" pcre-8.44\n    ./configure\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-安装zlib库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装zlib库"}},[t._v("#")]),t._v(" 3.安装ZLIB库")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v(" http://zlib.net/zlib-1.2.11.tar.gz 下载最新的 ZLIB 源码包，使用下面命令下载编译和安装 ZLIB 包：\n")])])]),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /opt\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" http://zlib.net/zlib-1.2.11.tar.gz\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zxvf zlib-1.2.11.tar.gz\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" zlib-1.2.11\n    ./configure\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),s("h3",{attrs:{id:"_4-安装ssl库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-安装ssl库"}},[t._v("#")]),t._v(" 4.安装SSL库")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("https://www.openssl.org/source/openssl-1.1.1g.tar.gz 下载最新的 OPENSSL 源码包，使用下面命令下载编译和安装 OPENSSL 包：\n")])])]),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /opt\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://www.openssl.org/source/openssl-1.1.1g.tar.gz\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zxvf openssl-1.1.1g.tar.gz\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" openssl-1.1.1g\n    ./configure\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),s("h3",{attrs:{id:"_5-安装nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-安装nginx"}},[t._v("#")]),t._v(" 5.安装NGINX")]),t._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /opt\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://mirrors.huaweicloud.com/nginx/nginx-1.9.9.tar.gz\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zxvf nginx-1.18.0.tar.gz\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" nginx-1.18.0\n     \n    ./configure --sbin-path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/opt/nginx/nginx "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --conf-path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/opt/nginx/nginx.conf "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --pid-path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/opt/nginx/nginx.pid "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --with-http_gzip_static_module "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --with-http_stub_status_module "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --with-file-aio "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --with-http_realip_module "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --with-http_ssl_module "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --with-pcre"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/opt/pcre-8.44 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --with-zlib"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/opt/zlib-1.2.11 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --with-openssl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/opt/openssl-1.1.1g\n     \n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" -j2\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);