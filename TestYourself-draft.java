import java.util.Scanner;

// A Naive and optimistic - We'll Never Have Problems Again - S2E10
// B Fun and self-confident - Gettin' Bi - S1E14
// C Career driven - Don't Be a Lawyer - S4E3
// D Family oriented / Parental - I Love My Daughter (But Not in a Creepy Way) - S1E5

class WhichSongAreYou {
    public static void main(String args[]){
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
        System.out.println("~~~~~~~~~~~~~~~~~~~~~");
        System.out.println("");
        System.out.println("Your results:");
        System.out.println("^^^^^^^^^^^^");
        System.out.println("");
        if (((professionalGoals == 2) && (loveOfMyLife == 3)) || ((professionalGoals == 2) && (partyPersonality == 2)) || ((professionalGoals == 2) && (pieContest == 4)) || ((professionalGoals == 2) && (cheatedOn == 1)) || ((loveOfMyLife == 3) && (partyPersonality == 2)) || ((loveOfMyLife == 3) && (pieContest == 4)) || ((loveOfMyLife == 3) && (cheatedOn == 1)) || ((partyPersonality == 2) && (pieContest == 4))  || ((partyPersonality == 2) && (cheatedOn == 1)) || ((pieContest == 4) && (cheatedOn == 1))) {
            // A
            System.out.println("You are naive and optimistic. You are \"We'll Never Have Problems Again\" - Season 2 Episode 10");
        } else if (((professionalGoals == 3) && (loveOfMyLife == 1)) || ((professionalGoals == 3) && (partyPersonality == 1)) || ((professionalGoals == 3) && (pieContest == 3)) || ((professionalGoals == 3) && (cheatedOn == 4)) || ((loveOfMyLife == 1) && (partyPersonality == 1)) || ((loveOfMyLife == 1) && (pieContest == 3)) || ((loveOfMyLife == 1) && (cheatedOn == 4)) || ((partyPersonality == 1) && (pieContest == 3))  || ((partyPersonality == 1) && (cheatedOn == 4)) || ((pieContest == 3) && (cheatedOn == 4))) {
            // B
            System.out.println("You are fun and confident, You are \"Gettin' Bi\" - Season 1 Episode 14");
        } else if (((professionalGoals == 1) && (loveOfMyLife == 2)) || ((professionalGoals == 1) && (partyPersonality == 4)) || ((professionalGoals == 1) && (pieContest == 2)) || ((professionalGoals == 1) && (cheatedOn == 2)) || ((loveOfMyLife == 2) && (partyPersonality == 4)) || ((loveOfMyLife == 2) && (pieContest == 2)) || ((loveOfMyLife == 2) && (cheatedOn == 2)) || ((partyPersonality == 4) && (pieContest == 2))  || ((partyPersonality == 4) && (cheatedOn == 2)) || ((pieContest == 2) && (cheatedOn == 2))) {
            // C
            System.out.println("You are career driven. You are \"Don't Be a Lawyer\" - Season 4 Episode 3");
        } else if (((professionalGoals == 4) && (loveOfMyLife == 4)) || ((professionalGoals == 4) && (partyPersonality == 3)) || ((professionalGoals == 4) && (pieContest == 1)) || ((professionalGoals == 4) && (cheatedOn == 3)) || ((loveOfMyLife == 4) && (partyPersonality == 3)) || ((loveOfMyLife == 4) && (pieContest == 1)) || ((loveOfMyLife == 4) && (cheatedOn == 3)) || ((partyPersonality == 3) && (pieContest == 1))  || ((partyPersonality == 3) && (cheatedOn == 3)) || ((pieContest == 1) && (cheatedOn == 3))) {
            // D
            System.out.println("You are family oriented. You are \"I Love My Daughter (But Not in a Creepy Way)\" - Season 1 Episode 5");
        }
    }
}
