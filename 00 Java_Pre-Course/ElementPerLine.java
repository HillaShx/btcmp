class ElementPerLine {
    public static void main(String args[]) {
        createAndPrintIntArray(101,231,389,411,520);

    }
    static void createAndPrintIntArray(int a,int b,int c,int d,int e) {
        int[] numArray = {a, b, c, d, e};
        for (int i=0;i<5;i++) {
            System.out.println(numArray[i]);
        }
    }
}
