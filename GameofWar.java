import java.util.*;
import java.util.concurrent.*;

class GameofWar {
    public static void main(String args[]) {
        /* This program is a War card game */
        Scanner input = new Scanner(System.in);
        int coins = 50;
        int bet;
        boolean keepPlaying = true;
        String invalidInformationMessage = "You have entered invalid information";
        System.out.println("*~\u2665~\u2666~\u2663~\u2660~Welcome to WAR!~\u2660~\u2663~\u2666~\u2665~*");
        System.out.println("***********************************");
        System.out.println("Instructions:");
        // Instructions
        System.out.println("1. You choose the number of players - 1, vs computer - or 2, PvP");
        System.out.println("2. You place your bet at the beginning of each round");
        System.out.println("3. Two cards are picked randomly out of the deck");
        System.out.println("4. The card with the higher number is the winning card of this round, and its player wins the bet");
        System.out.println("5. When one of the players runs out of coins, the game is over");
        System.out.println("Let's go!");
        System.out.println("*~*");
        System.out.println("How many players? (1-2)");
        int numOfPlayers = input.nextInt();
        if (numOfPlayers == 1) {
            System.out.println("What is your name?");
            // getting rid of the new-line character
            input.nextLine();
            String singlePlayerUsername = input.nextLine();
            System.out.println("Hi " + singlePlayerUsername + "! You start with " + coins + " coins.");
            while ((coins > 0) && (keepPlaying)) {
                System.out.println("Place your bet for the next round:");
                try {
                    bet = input.nextInt();
                    if (bet > coins) {
                        System.out.println("You do not have as many coins!\nCheaters are not welcome here. Goodbye!");
                        System.exit(0);
                    } else if (bet < 1) {
                        System.out.println("Are you trying to cheat? You can't bet a negative number of coins. Goodbye!");
                        System.exit(0);
                    } else {
                        int computerCard = ThreadLocalRandom.current().nextInt(1,13);
                        int userCard = ThreadLocalRandom.current().nextInt(1,13);
                        String suit[] = {"\u2665","\u2666","\u2663","\u2660"};
                        int computerSuit = ThreadLocalRandom.current().nextInt(0,4);
                        int userSuit = ThreadLocalRandom.current().nextInt(0,4);
                        System.out.println("***\nThe computer played: " + computerCard + suit[computerSuit]);
                        System.out.println("You played: " + userCard + suit[userSuit]);
                        if (computerCard > userCard) {
                            System.out.println("Computer won this round!");
                            coins -= bet;
                            System.out.println("You now have " + coins + " coins.");
                            if (coins == 0) {
                                break;
                            } else {
                                System.out.println("***\nWhat would you like to do next?\n(Enter the number of your choice)");
                                System.out.println("1. Keep playing");
                                System.out.println("2. Take my money and leave");
                                int continueOrQuit = input.nextInt();
                                if (continueOrQuit == 2) {
                                    break;
                                } else if (continueOrQuit != 1) {
                                    System.out.println("You can't make this choice. Goodbye!");
                                    System.exit(0);
                                }
                            }
                        } else if (userCard > computerCard) {
                            System.out.println("You won this round!");
                            coins += bet;
                            System.out.println("You now have " + coins + " coins.");
                            System.out.println("***\nWhat would you like to do next?\n(Enter the number of your choice)");
                            System.out.println("1. Keep playing");
                            System.out.println("2. Take my money and leave");
                            int continueOrQuit = input.nextInt();
                            if (continueOrQuit == 2) {
                                break;
                            } else if (continueOrQuit != 1) {
                                System.out.println("You can't make this choice. Goodbye!");
                                System.exit(0);
                            }
                        } else {
                            System.out.println("This round was tied!");
                            System.out.println("You now have " + coins + " coins.");
                            System.out.println("***\nWhat would you like to do next?\n(Enter the number of your choice)");
                            System.out.println("1. Keep playing");
                            System.out.println("2. Take my money and leave");
                            int continueOrQuit = input.nextInt();
                            if (continueOrQuit == 2) {
                                keepPlaying = false;
                                break;
                            } else if (continueOrQuit != 1) {
                                System.out.println("You can't make this choice. Goodbye!");
                                System.exit(0);
                            }
                        }
                    }
                } catch (InputMismatchException e) {
                    System.out.println(invalidInformationMessage);
                }
            }
            if (coins == 0) {
                System.out.println("You ran out of coins! Goodbye!");
            } else {
                System.out.println("You chose to end the game with " + coins + " coins. Goodbye " + singlePlayerUsername + "!");
            }
        } else if (numOfPlayers == 2) {
            int player1coins = coins;
            int player2coins = coins;
            // getting rid of the new-line character
            input.nextLine();
            String players[] = {"player1","player2"};
            System.out.println("Please choose a name for player #1:");
            players[0] = input.nextLine();
            System.out.println("Hi " + players[0] + "! You start with " + player1coins + " coins.");
            System.out.println("Please choose a name for player #2:");
            players[1] = input.nextLine();
            System.out.println("Hi " + players[1] + "! You start with " + player2coins + " coins.");
            while ((player1coins > 0) && (player2coins > 0) && (keepPlaying)) {
                System.out.println(players[0] + " and " + players[1] + ", place your bet for the next round:");
                try {
                    bet = input.nextInt();
                    if ((bet > player1coins) || (bet > player2coins)) {
                        System.out.println("One or both players do not have as many coins!\nCheaters are not welcome here. Goodbye!");
                        System.exit(0);
                    } else if (bet < 1) {
                        System.out.println("Are you trying to cheat? You can't bet a negative number of coins. Goodbye!");
                        System.exit(0);
                    }
                    int player1Card = ThreadLocalRandom.current().nextInt(1,13);
                    int player2Card = ThreadLocalRandom.current().nextInt(1,13);
                    String suit[] = {"\u2665","\u2666","\u2663","\u2660"};
                    int player1Suit = ThreadLocalRandom.current().nextInt(0,4);
                    int player2Suit = ThreadLocalRandom.current().nextInt(0,4);
                    System.out.println("***\n" + players[0] + " played: " + player1Card + suit[player1Suit]);
                    System.out.println(players[1] + " played: " + player2Card + suit[player2Suit]);
                    if (player1Card > player2Card) {
                        System.out.println(players[0] + " won this round!");
                        player1coins += bet;
                        player2coins -= bet;
                        System.out.println(players[0] + " now has " + player1coins + " coins.");
                        System.out.println(players[1] + " now has " + player2coins + " coins.");
                        if ((player1coins == 0) || (player2coins == 0)) {
                            break;
                        } else {
                            System.out.println("***\nWhat would you like to do next?\n(Enter the number of your choice)");
                            System.out.println("1. Keep playing");
                            System.out.println("2. Take the money and leave");
                            int continueOrQuit = input.nextInt();
                            if (continueOrQuit == 2) {
                                keepPlaying = false;
                                break;
                            } else if (continueOrQuit != 1) {
                                System.out.println("You can't make this choice. Goodbye!");
                                System.exit(0);
                            }
                        }
                    } else if (player2Card > player1Card) {
                        System.out.println(players[1] + " won this round!");
                        player2coins += bet;
                        player1coins -= bet;
                        if ((player1coins == 0) || (player2coins == 0)) {
                            break;
                        } else {
                            System.out.println(players[1] + " now has " + player2coins + " coins.");
                            System.out.println(players[0] + " now has " + player1coins + " coins.");
                            System.out.println("***\nWhat would you like to do next?\n(Enter the number of your choice)");
                            System.out.println("1. Keep playing");
                            System.out.println("2. Take the money and leave");
                            int continueOrQuit = input.nextInt();
                            if (continueOrQuit == 2) {
                                keepPlaying = false;
                                break;
                            } else if (continueOrQuit != 1) {
                                System.out.println("You can't make this choice. Goodbye!");
                                System.exit(0);
                            }
                        }
                    } else {
                        System.out.println("This round was tied!");
                        System.out.println(players[1] + " now has " + player2coins + " coins.");
                        System.out.println(players[0] + " now has " + player1coins + " coins.");
                        System.out.println("***\nWhat would you like to do next?\n(Enter the number of your choice)");
                        System.out.println("1. Keep playing");
                        System.out.println("2. Take the money and leave");
                        int continueOrQuit = input.nextInt();
                        if (continueOrQuit == 2) {
                            keepPlaying = false;
                            break;
                        } else if (continueOrQuit != 1) {
                            System.out.println("You can't make this choice. Goodbye!");
                            System.exit(0);
                        }
                    }
                } catch (InputMismatchException e) {
                    System.out.println(invalidInformationMessage);
                }
            }
            if (player1coins == 0) {
                System.out.println(players[0] + " has run our of coins. " + players[1] + " has won the game! Goodbye!");
            } else if (player2coins == 0) {
                System.out.println(players[1] + " has run our of coins. " + players[0] + " has won the game! Goodbye!");
            } else {
                System.out.println("You chose to end the game. " + players[0] + " has " + player1coins + " and " + players[1] + " has " + player2coins + " coins. Goodbye!");
            }
        }
    }
}
