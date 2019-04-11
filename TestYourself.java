import java.util.Scanner;

class TestYourself {
    public static void main(String args[]){
        int totalScore;
        System.out.println("***********************************************************");
        System.out.println("**                                                       **");
        System.out.println("**    Which Song from Crazy Ex-Girlfriend Are You?       **");
        System.out.println("**                                                       **");
        System.out.println("***********************************************************");
        System.out.println("");
        System.out.println("Question 1/5");
        System.out.println("~~~~~~~~~~~~");
        System.out.println("What do you do for a living?");
        System.out.println("1. You've probably heard of me"); // C
        System.out.println("2. I'm gonna be really successful someday"); // A
        System.out.println("3. I do something I enjoy doing"); // B
        System.out.println("4. I have other aspirations in life that are keeping me busy"); // D
        Scanner user_input_1 = new Scanner(System.in);
        int professionalGoals = user_input_1.nextInt();
        if (professionalGoals == 2) {
            totalScore += 1
        } else if (professionalGoals == 3) {
            totalScore += 10
        } else if (professionalGoals == 1) {
            totalScore += 100
        } else if (professionalGoals == 4) {
            totalScore += 1000
        }
        System.out.println("Question 2/5");
        System.out.println("~~~~~~~~~~~~");
        System.out.println("Have you met the love of your life?");
        System.out.println("");
        System.out.println("1. Of course! and we've been together ever since"); // B
        System.out.println("2. Might have, but I was probably too busy to notice"); // C
        System.out.println("3. I will, someday!"); // A
        System.out.println("4. My niece is the love of my life"); // D
        Scanner user_input_2 = new Scanner(System.in);
        int loveOfMyLife = user_input_2.nextInt();
        if (loveOfMyLife == 3) {
            totalScore += 1
        } else if (loveOfMyLife == 1) {
            totalScore += 10
        } else if (loveOfMyLife == 2) {
            totalScore += 100
        } else if (loveOfMyLife == 4) {
            totalScore += 1000
        }
        System.out.println("Question 3/5");
        System.out.println("~~~~~~~~~~~~");
        System.out.println("");
        System.out.println("You're at a party. Where can we find you?");
        System.out.println("1. You don't have to look for me, you'll spot me right away!"); // B
        System.out.println("2. Woo! Party! Sounds like fun!"); // A
        System.out.println("3. Texting with my bae"); // D
        System.out.println("4. I haven't been to a party in 6 years"); // C
        Scanner user_input_3 = new Scanner(System.in);
        int partyPersonality = user_input_3.nextInt();
        if (partyPersonality == 2) {
            totalScore += 1
        } else if (partyPersonality == 1) {
            totalScore += 10
        } else if (partyPersonality == 4) {
            totalScore += 100
        } else if (partyPersonality == 3) {
            totalScore += 1000
        }
        System.out.println("Question 4/5");
        System.out.println("~~~~~~~~~~~~");
        System.out.println("");
        System.out.println("You're competing in a pie eating contest. What's your technique?");
        System.out.println("1. Remember the time we went to get a raspberry pie for nana's birthday? She LOVES raspberry pies!"); // D
        System.out.println("2. I'm gonna add a little laxative to my competitor's pies, then do crush them!"); // C
        System.out.println("3. I'll eat as much as I can and try to have fun!"); // B
        System.out.println("4. I'll spend my time looking for a special connection with someone"); // A
        Scanner user_input_4 = new Scanner(System.in);
        int pieContest = user_input_4.nextInt();
        if (pieContest == 4) {
            totalScore += 1
        } else if (pieContest == 3) {
            totalScore += 10
        } else if (pieContest == 2) {
            totalScore += 100
        } else if (pieContest == 1) {
            totalScore += 1000
        }
        System.out.println("Question 5/5");
        System.out.println("~~~~~~~~~~~~");
        System.out.println("");
        System.out.println("Your SO cheated on you. What do you do?");
        System.out.println("1. I'll probably be pissed at first, but once I calm down we can work it out"); // A
        System.out.println("2. I cheat on them even more!"); // C
        System.out.println("3. I call my mom"); // D
        System.out.println("4. That's crossing a line, we're probably breaking up over this"); // B
        Scanner user_input_5 = new Scanner(System.in);
        int cheatedOn = user_input_5.nextInt();
        if (cheatedOn == 1) {
            totalScore += 1
        } else if (cheatedOn == 4) {
            totalScore += 10
        } else if (cheatedOn == 2) {
            totalScore += 100
        } else if (cheatedOn == 3) {
            totalScore += 1000
        }
        System.out.println("~~~~~~~~~~~~~~~~~~~~~");
        System.out.println("");
        System.out.println("Your results:");
        System.out.println("^^^^^^^^^^^^");
        System.out.println("");
        if ((totalScore%10) > 1) {
            // A
            System.out.println("You are naive and optimistic. You are \"We'll Never Have Problems Again\" - Season 2 Episode 10")
        } else if (totalScore)
