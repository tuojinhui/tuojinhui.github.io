# Excel数据提取
[[toc]]

### 提取所有列到一列
```excel
    =CONCATENATE(A2, ',', B2, ',', C2)
```

### 提取为SQL插入语句
```excel
    =CONCATENATE("INSERT INTO TABLES (A1,B1,C1,D1,E1,F1,G1,H1,I1) values ('",A1,"','",B1,"','",C1,"','",D1,"','",E1,"','",F1,"','",G1,"','",H1,"','",I1,"');")
```