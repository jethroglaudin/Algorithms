class Solution {
    public int[] smallerNumbersThanCurrent(int[] nums) {
        int[] newArr = new int[nums.length];
        
        for(int i = 0; i < nums.length; i++){
            int counter = 0;
            for(int j = 0; j < nums.length; j ++){
                if(nums[i] > nums[j] && nums[i] != nums[j]){
                    counter++;
                }
            }
            newArr[i] = counter;
        }
        return newArr;      
    }
}