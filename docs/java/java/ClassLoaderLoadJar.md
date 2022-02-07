# 类加载器加载jar（ClassLoaderLoadJar）

[[toc]]

### 类加载器加载jar

```java 

package com.common;

import java.lang.reflect.Method;
import java.net.URL;
import java.net.URLClassLoader;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.function.Consumer;

public class ClassLoaderLoadJar {

    public static void main(String... args) {
        try {
            Path path = Paths.get("lib");
            Path basePath = Paths.get("base-lib");
            URLClassLoader cl = (URLClassLoader) ClassLoader.getSystemClassLoader();
            if (Files.isDirectory(path) && Files.isDirectory(basePath)) {
                Method addURL = URLClassLoader.class.getDeclaredMethod("addURL", URL.class);
                addURL.setAccessible(true);
                Consumer<Path> pathConsumer = p -> {
                    try {
                        addURL.invoke(cl, p.toUri().toURL());
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                };
                Files.newDirectoryStream(path).forEach(pathConsumer);
                Files.newDirectoryStream(basePath).forEach(pathConsumer);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        GatewayAdminApplication.main(args);
    }

}


```