import java.util.Scanner;

class NFactorial {
    public static void main(String args[]) {
        // This program calculates n! when n is given by the user, and prints the solution out
        int result = 1;
        System.out.println("Welcome to the factorial calculator!\nPlease choose a non-negative number to calculate the factorial of:");
        Scanner input = new Scanner(System.in);
        int number = input.nextInt();
        input.close();
        if (number == 0) {
            result = 1;
        } else {
            for (int i = number; i > 1; i--) {
                result *= i;
            }
        }
        System.out.println("The result of "+number+"! is: "+result);
    }
}
