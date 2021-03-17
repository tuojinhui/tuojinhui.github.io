package com.common;

import com.google.common.collect.Lists;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.util.ObjectUtils;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class T {


    private static final int DEFAULT_PARTITION_SIZE = 1000;

    public List<User> listUsers(List<String> userIds) {

        if (ObjectUtils.isEmpty(userIds)) {
            return Collections.emptyList();
        }

        AtomicReference<List<User>> atomicReference = new AtomicReference<>(Collections.emptyList());
        List<List<String>> partition = Lists.partition(userIds.stream().distinct().collect(Collectors.toList()), DEFAULT_PARTITION_SIZE);
        AtomicInteger atomicInteger = new AtomicInteger(0);

        do {
            // Actually obtain data from the database
            List<User> collect = Optional.ofNullable(this.listUsers(partition.get(atomicInteger.get()))).orElseGet(Collections::emptyList);
            atomicReference.set(Stream.concat(atomicReference.get().stream(), collect.stream()).collect(Collectors.toList()));
        } while (atomicInteger.incrementAndGet() < partition.size());

        return atomicReference.get();

    }


    @Data
    @NoArgsConstructor(staticName = "ofNew")
    static class User {
        String username;
        String password;
    }

}
