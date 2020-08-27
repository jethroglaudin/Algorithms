package HackerRank;

public class Solution {

    static String kangaroo(int x1, int v1, int x2, int v2) {
        String ans = "NO";

        while(x2 > x1) {
            x1 += v1;
            x2 += v2;
            if(x1 == x2) {   
                ans = "YES";
                break;
            }

        }
        return ans;

        // if(v2 - v1 == 0){
        //     return "NO";
        // }
      
        // if((x2 > x1) && (v2 > v1) || (x1 - x2) % (v2 - v1) != 0) {
        //     return "NO";
        // } 
        // return "YES";


    }
    
}