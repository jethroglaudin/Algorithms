class Solution {
    public int majorityElement(int[] nums) { 
        if(nums.length == 1){
            return nums[0];
        }
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        
        for(int num : nums){
            if(!map.containsKey(num)){
                map.put(num, 1);
            } else {
                map.put(num, map.get(num) + 1);
            }
        }
        return Collections.max(map.entrySet(), Map.Entry.comparingByValue()).getKey();
        
    }
}