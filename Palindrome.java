import java.util.*;

class Palindrome {
    public static void main(String args[]) {
        /* This program will tell the user wether the string they provided is a palindrome or not */
        String reversed = "";
        System.out.println("Hello! welcome to the Palindrometer. Please enter a string of characters to check:");
        Scanner input = new Scanner(System.in);
        String original = input.nextLine();
        input.close();
        int len = original.length();
        for (int i=len-1;i>=0;i--) {
            reversed += original.charAt(i);
        }
        if (original.equals(reversed)) {
            System.out.println("Your string is a palindrome!");
        } else {
            System.out.println("Your string is not a palindrome!");
        }
    }
}
