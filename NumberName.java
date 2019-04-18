import java.util.Scanner;

public class NumberName {
    public static void main(String[] args) {
        /* This program prints out the name of the number that is provided by the user. */
        String zero = "ZERO";
        String one = "ONE";
        String two = "TWO";
        String three = "THREE";
        String four = "FOUR";
        String five = "FIVE";
        String six = "SIX";
        String seven = "SEVEN";
        String eight = "EIGHT";
        String nine = "NINE";
        System.out.println("Hello! Please provide a number 0-9:");
        Scanner in = new Scanner(System.in);
        int number = in.nextInt();
        in.close();
        System.out.print("The number you entered is ");
        if (number == 0) {
            System.out.println(zero);
        } else if (number==1) {
            System.out.println(one);
        } else if (number==2) {
            System.out.println(two);
        } else if (number==3) {
            System.out.println(three);
        } else if (number==4) {
            System.out.println(four);
        } else if (number==5) {
            System.out.println(five);
        } else if (number==6) {
            System.out.println(six);
        } else if (number==7) {
            System.out.println(seven);
        } else if (number==8) {
            System.out.println(eight);
        } else if (number==9) {
            System.out.println(nine);
        }
    }
}
