import java.util.*;
import java.util.concurrent.*;

class MaxAndMinRandom {
    public static void main(String args[]) {
        getMinAndMax_RandomIntArray(5);
    }
    static void getMinAndMax_RandomIntArray (int len) {
        int[] numArray = new int[len];
        for (int i=0;i<len;i++) {
            numArray[i] = ThreadLocalRandom.current().nextInt(1,51);
        }
        Arrays.sort(numArray);
        System.out.println("The smallest number in the array: " + numArray[0]);
        System.out.println("The largest number in the array: " + numArray[len-1]);
        System.out.println("The array: " + Arrays.toString(numArray));

    }
}
