import java.util.*;

class BasicStringMethods {
    public static void main(String[] args) {
        char[] arr = {'h','e','l','l','o'};
        String st = "hello";
        char c = 'l';
        try {
            System.out.println(myCharAt(arr,8));
        } catch (IndexOutOfBoundsException e) {
            System.out.println("The provided index is out of bounds.");
        }
        System.out.println(myEquals(arr,st));
        System.out.println(myLastIndex(arr,c));
        System.out.println(myLength(st));
    }
    public static char myCharAt(char[] charArray, int index) {
        /* This method returns the element value of the given char array in the given index */
        // if ((index < 0) || (index > charArray.length)) {
        //     return '@';
        // }
        return charArray[index];
    }
    public static boolean myEquals(char[] charArray, String str) {
        /* This method return 'true' if the array and the string hold the exact same char values, 'false' if they don't */
        boolean isEqual = true;
        if (str.length() != charArray.length) {
            isEqual = false;
        } else {
            for (int i = 0; i < str.length(); i++) {
                // sArray[i] = s.charAt(i);
                if (str.charAt(i) != charArray[i]) {
                    isEqual = false;
                }
            }
        }
        return isEqual;
    }
    public static int myLastIndex(char[] charArray, char c) {
        /* This method returns the index value of the last item in the array that equals the value of the given char */
        int index = -1;
        for (int i=0;i<charArray.length;i++) {
            if (charArray[i] == c) {
                index = i;
            }
        }
        return index;
    }
    public static int myLength(String st) {
        /* This method returns the length of a string */
        int i = 0;
        for (char c : st.toCharArray()) {
            i++;
        }
        return i;
    }
}
