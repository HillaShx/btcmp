import java.util.Scanner;

public class QuadraticEquation {
    public static void main(String args[]) {
        // This programs calculates the values for x1 and x2 in a quadratic equation.
        double x1;
        double x2;
        System.out.println("This program solves quadratic equations when provide with the values for a, b and c.\nPlease provide the value for a:");
        Scanner input = new Scanner(System.in);
        int a = input.nextInt();
        System.out.println("Now please provide the value for b:");
        int b = input.nextInt();
        System.out.println("Lastly, please provide the value for c:");
        int c = input.nextInt();
        double sqroot = Math.sqrt((b*b)-(4*a*c));
        x1 = (-b+sqroot)/(2*a);
        x2 = (-b-sqroot)/(2*a);
        System.out.println("The value for x1 is: "+x1);
        System.out.println("The value for x2 is: "+x2);
        input.close();
    }

}
