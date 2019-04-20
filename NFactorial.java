import java.util.Scanner;

class NFactorial {
    public static void main(String args[]) {
        // This program calculates n! when n is given by the user, and prints the solution out
        int result = 1;
        System.out.println("Welcome to the factorial calculator!\nPlease choose a non-negative number to calculate the factorial of:");
        Scanner input = new Scanner(System.in);
        final int N = input.nextInt();
        int n = N;
        input.close();
        if (n == 0) {
            result = 1;
        } else {
            while (n > 1) {
                result *= n;
                n--;
            }
        }
        System.out.println("The result of "+N+"! is: "+result);
    }
}
