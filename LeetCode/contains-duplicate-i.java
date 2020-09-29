package LeetCode;

import java.util.HashMap;

class Solution {
    public boolean containsDuplicate(int[] nums) {
        HashMap<Integer, Integer> dup = new HashMap<Integer, Integer>();
        
        // iterate through array of nums
        
        for(int num : nums){
            if(dup.containsKey(num)){
                return true;
            } 
            dup.put(num, 1);
        }   
        return false;
    }
}
