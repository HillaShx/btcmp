import java.util.*;

class LongestWord {
    public static void main(String args[]) {
        /* This program finds the longest word in a string provided by the user and prints it out */
        String regexAlpha = "[a-zA-z]+";
        System.out.println("Welcome to LongestWordFinder! Please enter a string of text:");
        Scanner input = new Scanner(System.in);
        String userText = input.nextLine();
        input.close();
        String[] seperateWords = userText.split(" ");
        String longest = "";
        for (int i=0;i<seperateWords.length;i++) {
            if (!(seperateWords[i].matches(regexAlpha))) {
                seperateWords[i] = null;
            } else {
                if (seperateWords[i].length() > longest.length()) {
                    longest = seperateWords[i];
                }
            }
        }
        if (longest.length() == 0) {
            System.out.println("There are no valid words in the provided string of text.");
        }
        System.out.println("The longest word in the provided string of text is: " + longest);
    }
}
