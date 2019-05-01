import java.util.Scanner;

class LargerThan10 {
    public static void main(String args[]) {
        // This program will only quit if the user enters a number that is larger than 10
        Scanner input = new Scanner(System.in);
        System.out.println("Please enter a number larger than 10:");
        int number = input.nextInt();
        while (number <= 10) {
            System.out.println("Please enter a number LARGER than 10:");
            number = input.nextInt();
        }
        input.close();
        System.out.println("Thank you!");
    }
}
