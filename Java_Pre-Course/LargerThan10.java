import java.util.Scanner;

class LargerThan10 {
    public static void main(String args[]) {
        // This program will only quit if the user enters a number that is larger than 10
        Scanner input = new Scanner(System.in);
        int Number;
        System.out.println("Please enter a number larger than 10:");
        Number = input.nextInt();
        while (true) {
            if (Number <= 10) {
                System.out.println("Please enter a number LARGER than 10:");
                Number = input.nextInt();
            } else {
                input.close();
                System.out.println("Thank you!");
                break;
            }
        }
    }
}
