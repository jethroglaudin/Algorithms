import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Complete the checkMagazine function below.
    static void checkMagazine(String[] magazine, String[] note) {

        HashMap<String, Integer> magazineMap = new HashMap<String, Integer>();
        int counter = 0;
        for (String word : magazine) {
            if (magazineMap.containsKey(word)) {
                magazineMap.replace(word, magazineMap.get(word), counter++);
            } else {
                counter = 0;
                magazineMap.put(word, counter + 1);
            }    
        }

        boolean isMissing = false;

        for (int i = 0; i < note.length; i++) {
            if (magazineMap.containsKey(note[i])){
                magazineMap.replace(note[i], magazineMap.get(note[i]) - 1);
                if(magazineMap.get(note[i]) == 0){
                    magazineMap.remove(note[i]);
                }
            } else {
                isMissing = true;
            }
        }
        String ans = (isMissing) ? "No" : "Yes";

        System.out.println(ans);
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        String[] mn = scanner.nextLine().split(" ");

        int m = Integer.parseInt(mn[0]);

        int n = Integer.parseInt(mn[1]);

        String[] magazine = new String[m];

        String[] magazineItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < m; i++) {
            String magazineItem = magazineItems[i];
            magazine[i] = magazineItem;
        }

        String[] note = new String[n];

        String[] noteItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < n; i++) {
            String noteItem = noteItems[i];
            note[i] = noteItem;
        }

        checkMagazine(magazine, note);

        scanner.close();
    }
}