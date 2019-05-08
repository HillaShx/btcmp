import java.util.*;

class ReverseArrayElements {
    public static void main(String[] args) {
        int[] numbersArray = {1,2,3,4,5};
        int[] reversedArray = reverseElements(numbersArray);
        System.out.println(Arrays.toString(reversedArray));
    }
    public static int[] reverseElements(int[] numArray) {
        // This method flips elements in the given array
        int container;
        for (int i = 0; i < (numArray.length/2); i++) {
            container = numArray[i];
            numArray[i] = numArray[numArray.length-1-i];
            numArray[numArray.length-1-i] = container;
        }
        return numArray;
    }
}
