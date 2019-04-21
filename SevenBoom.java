import java.util.*;

class SevenBoom {
    public static void main(String args[]) {
        /* This program prints out numbers 1-100. Whenever it gets to a number that either contains the digit 7 or is divisible by 7, it prints out "BOOM". */
        Double i;
        for (i=1.0;i<=100;i++) {
            if (((i % 7) == 0) || ((i % 10) == 7) || (((i / 10) >= 7) && ((i / 10) < 8))) {
                System.out.print("BOOM,");
            } else if (i == 100) {
                System.out.println(i.intValue());
            } else {
                System.out.print(i.intValue()+",");
            }
        }
    }
}
