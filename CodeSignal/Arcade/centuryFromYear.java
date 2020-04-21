import java.io.*;
import java.math.*;
import java.util.*;

public class Solution {
    static int centuryFromYear(int year) {
        int ans = 0;
        if(year % 100 == 0) 
            ans = (int)Math.round(year / 100);
          else 
            ans = (int)Math.floor(year/100) + 1;
        return ans;
    }
}

