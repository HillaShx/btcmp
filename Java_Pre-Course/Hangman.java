import java.util.*;
import java.util.concurrent.*;
import java.io.*;

/*
THIS IS HANGMAN!
 */

class HangmanGame {
    public static void main(String args[]) {
        int attempts = initializeGame(10);
        final String SELECTED_WORD = wordSelector();
        String bleepedWord = "*".repeat(SELECTED_WORD.length());
        hangGameplay(attempts, bleepedWord, SELECTED_WORD);
    }
    public static int initializeGame(int attempts) {
        // This method initializes the whole game
        System.out.println("  ____\n /\\' . \\    ____\n/: \\____\\  / .  /\\\n\\' / .  / /____/..\\      H A N G M A N\n \\/____/  \\'  '\\  /\n           \\'__'\\/");
        return attempts;
    }
    public static String wordSelector() {
        // This method selects and returns the secret word of the game
        Scanner fileScan = null;
        try {
            fileScan = new Scanner(new File("/home/hillash/Documents/Repositories/btcmp/Java_Pre-Course/wordBank.csv"));
        } catch (FileNotFoundException e) {
            System.out.println("File cannot be found");
        }
        ArrayList<String> wordBank = new ArrayList<String>();
        String word;
        while (fileScan.hasNext()) {
            word = fileScan.nextLine();
            wordBank.add(word);
        }
        int arrIndex = ThreadLocalRandom.current().nextInt(0,wordBank.size());
        System.out.println("");
        return wordBank.get(arrIndex);
    }
    public static void hangGameplay(int attempts, String displayedWord,String secretWord) {
        // This method runs all of the rounds in a row until the player either loses or wins
        char[] guesses = new char[26];
        for (int x=0;x<guesses.length;x++) {
            guesses[x] = '@';
        }
        while ((attempts > 0) && (!(displayedWord.equals(secretWord)))) {
            System.out.println("You have " + attempts + " more attempts to guess the secret word. You can guess a single letter or the whole word");
            System.out.println("The secret word is:\n" + displayedWord);
            System.out.println("What is your guess?");
            boolean loseAttempt = true;
            Scanner in  = new Scanner(System.in);
            String input = in.nextLine().toLowerCase();
            if (input.length() == 1) {
                char guess = input.charAt(0);
                if ((input.length() > 1) || (input.length() < 1)) {
                    System.out.println("Your guess should be a single letter.");
                    loseAttempt = false;
                } else if (!(Character.isLetter(guess))) {
                    System.out.println("Your guess should be a letter a-z.");
                    loseAttempt = false;
                } else if (Arrays.binarySearch(guesses, guess) > 0) {
                    System.out.println("You have already guessed this letter!");
                    loseAttempt = false;
                }
                for (int i=0;i<secretWord.length();i++) {
                    if (secretWord.charAt(i) == guess) {
                        displayedWord = displayedWord.substring(0,i) + guess + displayedWord.substring(i+1);
                        loseAttempt = false;
                    }
                }
                for (int j=0;j<guesses.length;j++) {
                    if (guesses[j] == '@') {
                        guesses[j] = guess;
                    }
                }
            } else if (input.length() != secretWord.length()) {
                System.out.println("In order to guess the whole word, your guess should be the same length as the secret word.");
                loseAttempt = false;
            } else if (input.equals(secretWord)) {
                displayedWord = secretWord;
            }

            if (loseAttempt) {
                attempts -= 1;
            }

        if (attempts == 0) {
            System.out.println("You have run out of guesses. You lose! Goodbye!");
        } else if (displayedWord.equals(secretWord)) {
            System.out.println("You have revealed the secret word. You win! Goodbye!");
        }
        }
    }
}
