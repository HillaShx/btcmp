import java.util.*;

public class GoodRestaurant {
    public static void main(String[] args) {
        /* This program recommends a good restaurant in Tel Aviv based on the user's preferences. */
        String vegan = "n";
        String restaurant = "none";
        boolean isVegetarian = false;
        boolean isVegan = false;
        String invalidInformationMessage = "You have entered invalid information";
        Scanner input = new Scanner(System.in);
        int numOfPeople = 0;
        System.out.println("Hi! Welcome to Good Food restaurant recommendations!\n\nHow many people are you going with?");
        try {
            numOfPeople = input.nextInt();
        } catch (InputMismatchException e) {
            System.out.println(invalidInformationMessage);
            System.exit(0);
        }
        // reading the \n character so it doesn't interfere with my input
        input.nextLine();
        System.out.println("Should the food be vegetarian? (y/n)");
        String vegetarian = input.nextLine();
        if (vegetarian.equals("y")) {
            isVegetarian = true;
            System.out.println("Should it be vegan? (y/n)");
            vegan = input.nextLine();
            if (vegan.equals("y")) {
                isVegan = true;
            } else if (!vegan.equals("n")) {
                System.out.println(invalidInformationMessage);
                System.exit(0);
            }
        } else if (!vegetarian.equals("n")) {
            System.out.println(invalidInformationMessage);
            System.exit(0);
        }
        System.out.println("What kind of cuisine are you looking for? (enter the number of the option you'd like to choose)");
        System.out.println("1. Thai");
        System.out.println("2. American");
        System.out.println("3. Italian");
        int cuisine = input.nextInt();
        if ((cuisine != 1) && (cuisine != 2) && (cuisine != 3)) {
            System.out.println(invalidInformationMessage);
            System.exit(0);
        }
        input.close();
        if (numOfPeople < 10) {
            if (isVegetarian) {
                if (isVegan) {
                    if (cuisine == 1) {
                        restaurant = "The Thai in Har Sinai";
                    } else if (cuisine == 2) {
                        restaurant = "Rainbow Pita";
                    } else if (cuisine == 3) {
                        restaurant = "The Green Cat";
                    }
                } else if (!isVegan) {
                    if (cuisine == 1) {
                        restaurant = "Thai House";
                    } else if (cuisine == 2) {
                        restaurant = "Shuffle";
                    } else if (cuisine == 3) {
                        restaurant = "Pasta e Via";
                    }
                }
            } else if (!isVegetarian) {
                if (cuisine == 1) {
                    restaurant = "Nithan Thai";
                } else if (cuisine == 2) {
                    restaurant = "Burgers Bar";
                } else if (cuisine == 3) {
                    restaurant = "Amore Mio";
                }
            }
        } else if (numOfPeople > 10) {
            if (isVegetarian) {
                if (isVegan) {
                    if (cuisine == 1) {
                        restaurant = "Mina Tomei";
                    } else if (cuisine == 2) {
                        restaurant = "Mevorach";
                    } else if (cuisine == 3) {
                        restaurant = "Pizza People";
                    }
                } else if (!isVegan) {
                    if (cuisine == 1) {
                        restaurant = "Nam";
                    } else if (cuisine == 2) {
                        restaurant = "Moses";
                    } else if (cuisine == 3) {
                        restaurant = "Barzilai";
                    }
                }
            } else if (!isVegetarian) {
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
