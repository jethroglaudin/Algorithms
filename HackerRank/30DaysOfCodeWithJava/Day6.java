import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();

        for (int i = 0; i < n; i++){
            String str = scan.next();
            StringBuilder evenStr = new StringBuilder();
            StringBuilder oddStr = new StringBuilder();

            for (int j = 0; j < str.length(); j++){
                if (j % 2 == 0){
                    evenStr.append(str.charAt(j));
                }
                else {
                    oddStr.append(str.charAt(j));
                }
            }
            System.out.println(evenStr + " " + oddStr);
        }
    }
}