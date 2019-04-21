import java.util.*;

class StarForSpace {
    public static void main(String args[]) {
        /* This program will replace any space in the string given my the user with an asterix */
        System.out.println("Please enter a string of text:");
        Scanner input = new Scanner(System.in);
        String text = input.nextLine();
        input.close();
        System.out.println(text.replace(' ','*'));
    }
}
