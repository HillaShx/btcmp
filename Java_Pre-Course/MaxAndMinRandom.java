import java.util.*;

class MaxAndMinRandom {
    public static void main(String args[]) {
        getMinAndMax_RandomIntArray(5);
    }
    static void getMinAndMax_RandomIntArray (int len) {
        Random r = new Random();
        int[] numArray = new int[len];
        for (int i=0;i<len;i++) {
            numArray[i] = r.nextInt(50) + 1;
        }
        Arrays.sort(numArray);
        System.out.println("The smallest number in the array: " + numArray[0]);
        System.out.println("The largest number in the array: " + numArray[len-1]);
        System.out.println("The array: " + Arrays.toString(numArray));
    }
}
