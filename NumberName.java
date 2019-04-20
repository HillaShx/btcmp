import java.util.Scanner;

public class NumberName {
    public static void main(String[] args) {
        // This program prints out the name of the number that is provided by the user
        String numberName;
        System.out.println("Hello! Please provide a number 0-9:");
        Scanner in = new Scanner(System.in);
        int number = in.nextInt();
        in.close();
        switch (number) {
            case 0: numberName = "ZERO";
                break;
            case 1: numberName = "ONE";
                break;
            case 2: numberName = "TWO";
                break;
            case 3: numberName = "THREE";
                break;
            case 4: numberName = "FOUR";
                break;
            case 5: numberName = "FIVE";
                break;
            case 6: numberName = "SIX";
                break;
            case 7: numberName = "SEVEN";
                break;
            case 8: numberName = "EIGHT";
                break;
            case 9: numberName = "NINE";
                break;
            default: numberName = "Invalid";
                break;
        }
        System.out.println("The number you entered is "+ numberName);
    }
}
