import java.util.*;

class CapitalizeVowels {
    public static void main(String args[]) {
        /* This program will capitalize all the vowels in a string that the user provides */
        String capitalized = "";
        Scanner input = new Scanner(System.in);
        System.out.println("Welcome to Vowel Capitalizer! Please enter a string of text:");
        String userString = input.nextLine();
        input.close();
        int len = userString.length();
        for (int i=0;i<len;i++) {
            if ((userString.charAt(i) == 'a') || (userString.charAt(i) == 'e') || (userString.charAt(i) == 'i') || (userString.charAt(i) == 'o') || (userString.charAt(i) == 'u')) {
                capitalized += Character.toUpperCase(userString.charAt(i));
            } else {
                capitalized += userString.charAt(i);
            }

        }
        System.out.println(capitalized);
    }
}
