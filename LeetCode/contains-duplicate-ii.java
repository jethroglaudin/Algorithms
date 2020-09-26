package LeetCode;

import java.util.HashMap;

class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        // boolean ans = false;
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        
        for(int i = 0; i < nums.length; i++){
            if(map.containsKey(nums[i]) && Math.abs(map.get(nums[i]) - i) <= k){
                return true;
            }
            map.put(nums[i], i);
        }
        return false;
        
    //     for(int i = 0; i < nums.length; i++){
    //         if(ans == false) {
    //             for(int j = i + 1; j < nums.length; j++){
    //                 if(nums[i] == nums[j]){
    //                     int result = Math.abs(i - j);
    //                     if(result <= k){
    //                         // System.out.println(result);
    //                         ans = true;
    //                         break;
    //                     }
    //                 }
    //             }        
    //         } else {
    //             break;
    //         }       
    //     }
    //     return ans;
     }
}
