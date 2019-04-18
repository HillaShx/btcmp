import java.util.Scanner;

public class GoodRestaurant {
    public static void main(String[] args) {
        /* This program recommends a good restaurant in Tel Aviv based on the user's preferences. */
        char vegan = 'n';
        String restaurant = "none";
        Scanner input = new Scanner(System.in);
        System.out.println("Hi! Welcome to Good Food restaurant recommendations!\n\nHow many people are you going with?");
        int numOfPeople = input.nextInt();
        // reading the \n character so it doesn't interfere with my input
        input.nextLine();
        System.out.println("Should the food be vegetarian? (y/n)");
        char vegetarian = input.nextLine().charAt(0);
        if (vegetarian == 'y') {
            System.out.println("Should it be vegan? (y/n)");
            vegan = input.nextLine().charAt(0);
        }
        System.out.println("What kind of cuisine are you looking for? (enter the number of the option you'd like to choose)");
        System.out.println("1. Thai");
        System.out.println("2. American");
        System.out.println("3. Italian");
        int cuisine = input.nextInt();
        input.close();
        if (numOfPeople < 10) {
            if (vegetarian == 'y') {
                if (vegan == 'y') {
                    if (cuisine == 1) {
                        restaurant = "The Thai in Har Sinai";
                    } else if (cuisine == 2) {
                        restaurant = "Rainbow Pita";
                    } else if (cuisine == 3) {
                        restaurant = "The Green Cat";
                    }
                } else if (vegan == 'n') {
                    if (cuisine == 1) {
                        restaurant = "Thai House";
                    } else if (cuisine == 2) {
                        restaurant = "Shuffle";
                    } else if (cuisine == 3) {
                        restaurant = "Pasta e Via";
                    }
                }
            } else if (vegetarian == 'n') {
                if (cuisine == 1) {
                    restaurant = "Nithan Thai";
                } else if (cuisine == 2) {
                    restaurant = "Burgers Bar";
                } else if (cuisine == 3) {
                    restaurant = "Amore Mio";
                }
            }
        } else if (numOfPeople > 10) {
            if (vegetarian == 'y') {
                if (vegan == 'y') {
                    if (cuisine == 1) {
                        restaurant = "Mina Tomei";
                    } else if (cuisine == 2) {
                        restaurant = "Mevorach";
                    } else if (cuisine == 3) {
                        restaurant = "Pizza People";
                    }
                } else if (vegan == 'n') {
                    if (cuisine == 1) {
                        restaurant = "Nam";
                    } else if (cuisine == 2) {
                        restaurant = "Moses";
                    } else if (cuisine == 3) {
                        restaurant = "Barzilai";
                    }
                }
            } else if (vegetarian == 'n') {
                if (cuisine == 1) {
                    restaurant = "Japanika";
                } else if (cuisine == 2) {
                    restaurant = "Wolfnights";
                } else if (cuisine == 3) {
                    restaurant = "Oliveri";
                }
            }
        }
        System.out.println("The best option for you is "+restaurant+". Bon apetit!");
    }
}
