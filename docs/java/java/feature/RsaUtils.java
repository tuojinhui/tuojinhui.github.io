package com.common;

import lombok.extern.slf4j.Slf4j;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.security.*;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.ConcurrentHashMap;


@Slf4j
public class RsaUtils {

    /**
     * 公钥、私钥上下文
     */
    private static final Map<String, Key> concurrent = new ConcurrentHashMap<>(2);

    /**
     * 从文件中读取公钥
     *
     * @param sourcePath 公钥保存路径
     * @return 公钥对象
     */
    public static PublicKey getPublicKey(String sourcePath) {
        PublicKey publicKey;
        if (Objects.isNull(publicKey = (PublicKey) concurrent.get(sourcePath))) {
            concurrent.put(sourcePath, publicKey = getPublicKey(readFile(sourcePath)));
        }
        return publicKey;
    }

    /**
     * 从文件中读取私钥
     *
     * @param sourcePath 私钥保存路径
     * @return 私钥对象
     */
    public static PrivateKey getPrivateKey(String sourcePath) {
        PrivateKey privateKey;
        if (Objects.isNull(privateKey = (PrivateKey) concurrent.get(sourcePath))) {
            concurrent.put(sourcePath, privateKey = getPrivateKey(readFile(sourcePath)));
        }
        return privateKey;
    }

    /**
     * 获取公钥
     *
     * @param bytes 公钥的字节形式
     * @return java.security.PublicKey
     */
    private static PublicKey getPublicKey(byte[] bytes) {
        try {
            X509EncodedKeySpec spec = new X509EncodedKeySpec(bytes);
            KeyFactory factory = KeyFactory.getInstance("RSA");
            return factory.generatePublic(spec);
        } catch (Exception e) {
            throw new RuntimeException("获取公钥异常:" + e.getMessage());
        }
    }

    /**
     * 获取私钥
     *
     * @param bytes 私钥的字节形式
     * @return java.security.PrivateKey
     */
    private static PrivateKey getPrivateKey(byte[] bytes) {
        try {
            PKCS8EncodedKeySpec spec = new PKCS8EncodedKeySpec(bytes);
            KeyFactory factory = KeyFactory.getInstance("RSA");
            return factory.generatePrivate(spec);
        } catch (Exception e) {
            throw new RuntimeException("获取私钥异常:" + e.getMessage());
        }
    }

    /**
     * 根据密文，生成RSA公钥和私钥,并写入指定文件
     *
     * @param publicKeyPath  公钥文件路径
     * @param privateKeyPath 私钥文件路径
     * @param secret         生成私钥的密文
     */
    private static void generateKey(String publicKeyPath, String privateKeyPath, String secret) {
        try {
            KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");
            SecureRandom secureRandom = new SecureRandom(secret.getBytes());
            keyPairGenerator.initialize(1024, secureRandom);
            KeyPair keyPair = keyPairGenerator.genKeyPair();
            byte[] publicKeyBytes = keyPair.getPublic().getEncoded();
            writeFile(publicKeyPath, publicKeyBytes);
            byte[] privateKeyBytes = keyPair.getPrivate().getEncoded();
            writeFile(privateKeyPath, privateKeyBytes);
        } catch (Exception e) {
            throw new RuntimeException("生成密钥对异常:" + e.getMessage());
        }
    }

    /**
     * 读取文件
     *
     * @param sourcePath 源路径
     * @return bytes     字节数组
     */
    private static byte[] readFile(String sourcePath) {
        try {
            return Files.readAllBytes(new File(sourcePath).toPath());
        } catch (Exception e) {
            throw new RuntimeException("读取文件异常:" + e.getMessage());
        }
    }

    /**
     * 写入文件
     *
     * @param destPath 目标路径
     * @param bytes    字节数组
     */
    private static void writeFile(String destPath, byte[] bytes) {
        try {
            Files.write(Paths.get(destPath), bytes);
        } catch (IOException e) {
            throw new RuntimeException("写入文件异常:" + e.getMessage());
        }
    }

}
