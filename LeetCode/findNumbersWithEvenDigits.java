class Solution {
    public int findNumbers(int[] nums) {
        int evens = 0;
        for(int num : nums){
            String temp = String.valueOf(num);
            if(temp.length() % 2 == 0){
                evens++;
            }
        }
        
        return evens;
        
    }
}