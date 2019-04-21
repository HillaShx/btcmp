import java.util.*;

class PrimeNumbers {
    public static void main(String args[]) {
        /* This program prints out all prime numbers 1-n. n is given by the user. */
        System.out.println("Welcome to PrimeCounter! We're going to count all prime numbers 1-n. What should n's value be?");
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        input.close();
        for (int i=2;i<=n;i++) {
            boolean isPrime = true;
            for (int j=2;j<i;j++) {
                if (i % j == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                System.out.println(i);
            }
        }
    }
}
