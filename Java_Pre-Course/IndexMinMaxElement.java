import java.util.*;

class IndexMinMaxElement {
    public static void main(String args[]) {
        /* This program has a method that finds the minimum and maximum values in an array given as a parameter, and returns a new array containing the index numbers of min and max. */
        int[] inputArr = {43,21,24,90};
    }
    public static int[] getMinMax_Array(int [] arr) {
        int len = arr.length;
        int minIndex = 0;
        int maxIndex = 0;
        for (int i=1;i<len;i++) {
            if (arr[i] < arr[minIndex]) {
                minIndex = i;
            } else if (arr[i] > arr[maxIndex]) {
                maxIndex = i;
            }
        }
        int[] minMax = {minIndex,maxIndex};
        return minMax;
    }
}
