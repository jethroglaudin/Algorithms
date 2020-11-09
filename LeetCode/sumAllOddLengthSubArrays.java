package LeetCode;

class Solution {
    public int sumOddLengthSubarrays(int[] arr) {
        int sum = 0;
        int len = arr.length;
        
        for(int i = 0; i < len; i++){
            // subArr that starts with int
            int startHere = len - i;
            // sub arrays that end with int
            int endHere = i + 1;
            
            // total sub arrays possible
            int totalSubs = startHere * endHere;
            
            // total odd subs
            //calculate total odd subs
            // cut the sub total in half to find odd subs
            // if totalSub is odd currently increment by 1 since its unbalanced
            // else just divide by 2;
            int oddSubs = totalSubs % 2 == 0 ? 
                totalSubs / 2 : (totalSubs / 2) + 1;
            
            // increment sum by multiply the totalAmount of odd subs by element
            sum += oddSubs * arr[i];
            
        }       
        return sum;
        
    }
}