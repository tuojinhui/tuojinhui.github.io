
package com.billbear.common.utils;

import java.util.Base64;
import java.util.UUID;

public class UUIDUtils {
    public UUIDUtils() {
    }

    public static String randomUUIDToBase64() {
        UUID uuid = UUID.randomUUID();
        byte[] uuidArr = asByteArray(uuid);
        return Base64.getUrlEncoder().withoutPadding().encodeToString(uuidArr);
    }

    public static byte[] asByteArray(UUID uuid) {
        long msb = uuid.getMostSignificantBits();
        long lsb = uuid.getLeastSignificantBits();
        byte[] buffer = new byte[16];

        int i;
        for (i = 0; i < 8; ++i) {
            buffer[i] = (byte) ((int) (msb >>> 8 * (7 - i)));
        }

        for (i = 8; i < 16; ++i) {
            buffer[i] = (byte) ((int) (lsb >>> 8 * (7 - i)));
        }

        return buffer;
    }

    public static UUID toUUID(byte[] byteArray) {
        long msb = 0L;
        long lsb = 0L;

        int i;
        for (i = 0; i < 8; ++i) {
            msb = msb << 8 | (long) (byteArray[i] & 255);
        }

        for (i = 8; i < 16; ++i) {
            lsb = lsb << 8 | (long) (byteArray[i] & 255);
        }

        return new UUID(msb, lsb);
    }
}
