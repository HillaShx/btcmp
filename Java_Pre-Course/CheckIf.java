import java.util.Scanner;

public class CheckIf {
    public static void main(String[] args) {
        int total;
        // prompts the user for two numbers
        System.out.println("Please submit a number:");
        Scanner in1 = new Scanner(System.in);
        int number1 = in1.nextInt();
        System.out.println("Please submit a second number:");
        in1.close();
        Scanner in2 = new Scanner(System.in);
        int number2 = in2.nextInt();
        in2.close();
        // calculates the sum
        total = number1+number2;
        // returns "makes 10" if the sum is equal to 10, "nope" if it isn't.
        if (total == 10) {
            System.out.println("makes 10");
        } else {
            System.out.println("nope");
        }
    }
}
