import java.util.*;

class JoinStringArrays {
    public static void main(String[] args) {
        String[] stArr1 = {"Hello","World"};
        String[] stArr2 = {"Yellow", "Mold"};
        addArrays(stArr1,stArr2);
    }
    public static String[] addArrays(String[] arr1, String[] arr2) {
        int len = arr1.length + arr2.length;
        String[] concat = new String[len];
        for (int i=0;i<arr1.length;i++) {
            concat[i] = arr1[i];
        }
        for (int i=arr1.length;i<len;i++) {
            concat[i] = arr2[i-arr1.length];
        }
        return concat;
    }
}
