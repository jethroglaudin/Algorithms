package LeetCode;

public class Solution {
    public int[] createTargetArray(int[] nums, int[] index) {
        List<Integer> vals = new ArrayList<Integer>();
        int[] target = new int[nums.length];
        
        for(int i = 0; i < nums.length; i++){
            vals.add(index[i], nums[i]);
        }
        
        // System.out.println(Arrays.toString(vals.toArray()));
        for (int num = 0; num < vals.size(); num++){
            target[num] = vals.get(num);
        }
         return target;
    
    }
   
}