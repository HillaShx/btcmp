import java.util.*;

class ReverseArrayElements {
    public static void main(String[] args) {
        int[] numbersArray = {1,2,3,4,5};
        reverseElements(numbersArray);
    }
    public static int[] reverseElements(int[] numArray) {
        // This method flips elements in the given array
        int container;
        int lastIndex = numArray.length-1;
        for (int i=0;i<(numArray.length/2);i++) {
            container = numArray[i];
            numArray[i] = numArray[lastIndex];
            numArray[lastIndex] = container;
            lastIndex--;
        }
        return numArray;
    }
}
