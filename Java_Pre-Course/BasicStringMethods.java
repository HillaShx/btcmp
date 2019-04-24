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
        myEquals(arr,st);
        myLastIndex(arr,c);
        myLength(st);
    }
    public static char myCharAt(char[] charArray, int index) {
        /* This method returns the element value of the given char array in the given index */
        // if ((index < 0) || (index > charArray.length)) {
        //     return '@';
        // }
        return charArray[index];
    }
    public static boolean myEquals(char[] charArray, String s) {
        /* This method return 'true' if the array and the string hold the exact same char values, 'false' if they don't */
        boolean isEqual = true;
        char[] sArray = new char[s.length()];
        if (!(sArray.length == charArray.length)) {
            isEqual = false;
        } else {
            for (int i=0;i<s.length();i++) {
                sArray[i] = s.charAt(i);
                if (!(sArray[i] == charArray[i])) {
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
        int i = 0;
        for (char c : st.toCharArray()) {
            i++;
        }
        return i;
    }
}
